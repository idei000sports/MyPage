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

    const notes = await prisma.notes.findMany();
    return NextResponse.json(notes);
}




export async function POST(request) {

    console.log("POSTにきてる")
    const json  = await request.json();
    const response = await prisma.notes.create({
      data: {
        content: json.content
      },
    });
    
  
    return NextResponse.json(response);
  }

