import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//インスタンスを作成
const prisma = new PrismaClient();

// データベースに接続する関数
export const connect = async () => {
    try {
        //prismaでデータベースに接続
        prisma.$connect();
        console.log("コネクト成功")
    } catch (error) {
        return Error("DB接続失敗しました")
    }
}

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
    const origin = await req.json();
    try {
        await prisma.origin.create({
            data: {
                name: origin.name,
                country: origin.country,
                state: origin.state,
                county: origin.county,
                city: origin.city,
                formation: Number(origin.formation),
                dissolution: Number(origin.dissolution),
                genres: origin.genres
            },
        })
    } catch (e) {
        console.log("被りorエラー")
    }
    console.log("完了");
    const edited_origins = await getAllOrigins();
    return NextResponse.json(edited_origins);
}

/*
export async function POST(req) {
    //const { country, state, county, lattitude, longitude } = await req.json();
    const origins = await req.json();




    for (let i = 0; i < origins.length; i++) {

        try {
            await prisma.origin.create({
                data: {
                    name: origins[i].name,
                    country: origins[i].country,
                    state: origins[i].state,
                    county: origins[i].county,
                    formation: origins[i].formation,
                    dissolution: origins[i].dissolution,
                    genres: origins[i].genres
                },
            })
        } catch (e) {
            console.log("被りorエラー")
        }

        console.log(`実行中 ${i} / ${origins.length - 1}`);

    }

    console.log("完了");



    const edited_origins = await getAllOrigins();
    return NextResponse.json(edited_origins);
}
*/