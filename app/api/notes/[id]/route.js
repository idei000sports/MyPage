import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



//指定したIDだけ取得
export async function GET(request, {params}) {
    console.log("GETの中だ")

    if(params.id != null){
        const id = Number(params.id)
        const response = await searchFromID(id);
        return Response.json(response);
    }else if(params.content != null){
        const content = params.content
        const response = await searchFromContent(content);
        return Response.json(response);
    }
}

async function searchFromID(id){
    const response = await prisma.notes.findUnique({
        where: {
          id,
        },
      });

    return response;
}

async function searchFromContent(content){
    const response = await prisma.notes.findMany({
        where: {
          content,
        },
      });

    return response;
}

export async function PATCH(request, {params}) {
    const id = Number(params.id)
    const json = await request.json()
    // リクエストのidを元にcompletedを反転させる
    const response = await prisma.notes.update({
        where: {
            id,
        },
        data: {
            content: json.content,
        },
    })
    return Response.json(response)
}


export async function DELETE(request, { params }) {
    const id = Number(params.id)
    // リクエストのidを元に削除
    const response = await prisma.notes.delete({
        where: {
            id,
        },
    })
    return Response.json(response)
}