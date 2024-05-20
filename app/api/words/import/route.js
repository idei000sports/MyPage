import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//インスタンスを作成
const prisma = new PrismaClient();


export async function POST(req) {

    console.log("words/import/route.js")
    const words = await req.json();

    try {
        
        const response = await prisma.words.createMany({
            data: words.map((word) => ({
                word: word.word,
                kana: word.kana,
                boin: word.boin,
                hinshi: word.hinshi,
              })),
            skipDuplicates: true, // Skip 
        })
        return NextResponse.json(response);

    } catch (e) {
        console.log("被りorエラー")
    }
    console.log("完了");
}