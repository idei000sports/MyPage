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
    /*
    console.log("getの中")
    try {
        await connect();
        const notes = await prisma.notes.findMany();
        console.log("tryの中");

        return NextResponse.json({ notes }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ messeage: "Error" }, { status: 500 })

    } finally {
        //必ず実行する
        await prisma.$disconnect();
    }
    */
    const notes = await getAllNotes();
    return NextResponse.json(notes);
}

async function getAllNotes() {
    const notes = await prisma.notes.findMany();
    return notes;
}
/*
export async function POST(request: ) {
    const { content } = await request.json();
  
    await prisma.notes.create({
      data: {
        content: content,
      },
    });
  
    const notes = await getAllNotes();
    return NextResponse.json(notes);
  }
*/
export const POST = async (req) => {
    console.log("postの中");
}