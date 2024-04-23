import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



//指定したIDだけ取得
export async function GET(request, { params }) {
    console.log("searchGETの中だ")

    const content = params.content
    const response = await searchFromContent(content);
    return Response.json(response);

}


async function searchFromContent(content) {
    const response = await prisma.notes.findMany({
        where: {
            content,
        },
    });

    return response;
}

