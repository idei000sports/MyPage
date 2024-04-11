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

    //console.log(req);
    //console.log(req);
    //console.log(req.url)
    //console.log(req.url.searchParams.searchWord);
    //test();
    const words = await getAllWords();
    //console.log(words);
    return NextResponse.json(words);
}




async function getAllWords() {
    const words = await prisma.words.findMany({
        where: {
            word: "愛",
          },
    });
    return words;
}

export async function POST(request) {
    let req = await request.json()

    const words = await prisma.words.findMany({
        where: {
            boin: req.boin,
          },
    });

    return NextResponse.json(words);
}



/*
create版
export async function POST(req) {
    const words = await req.json();

    try {
        await prisma.words.createMany({
            data: words.map((word) => ({
                word: word.word,
                kana: word.kana,
                boin: word.boin,
                hinshi: word.hinshi,
              })),
            skipDuplicates: true, // Skip 
        })

    } catch (e) {
        console.log("被りorエラー")
    }
    console.log("完了");

    const edited_words = await getAllWords();
    return NextResponse.json(edited_words);
}
*/