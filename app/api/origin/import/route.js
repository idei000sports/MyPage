import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//インスタンスを作成
const prisma = new PrismaClient();


async function getAllOrigins() {
    const origins = await prisma.origin.findMany();
    return origins;
}





export async function POST(req){
    console.log("api/origin/import")
    const origins = await req.json();
    try {
        await prisma.origin.createMany({
            data: origins.map((origin) => ({
                name: origin.name,
                county_code: origin.county_code,
                formation: Number(origin.formation),
                dissolution: Number(origin.dissolution),
                genres: origin.genres,

              })),
            skipDuplicates: true, // Skip 
        })
    } catch (e) {
        console.log("被りorエラー")
        console.log(e)
    }
    
    console.log("完了");
    const edited_origins = await getAllOrigins();
    console.log(edited_origins)
    return NextResponse.json(edited_origins);
}

