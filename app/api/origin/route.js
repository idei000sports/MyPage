import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//インスタンスを作成
const prisma = new PrismaClient();

// データベースからデータを取得する
export const GET = async (req) => {
    const origins = await getAllOrigins();
    return NextResponse.json(origins);
}

async function getAllOrigins() {
    const origins = await prisma.origin.findMany();
    return origins;
}



export async function POST(req){

    console.log("origin/route")
    const origin = await req.json();
    try {
        await prisma.origin.create({
            data: {
                name: origin.name,
                county_code: origin.county_code,
                formation: Number(origin.formation),
                dissolution: Number(origin.dissolution),
                genres: origin.genres
            },
        })
    } catch (e) {
        console.log("被りorエラー")
        console.log(e)
    }
    
    console.log("完了");
    
    const edited_origins = await getAllOrigins();
    return NextResponse.json(edited_origins);
}
