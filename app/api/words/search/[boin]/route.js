import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



//指定したIDだけ取得
export async function GET(request, { params }) {
  
    const boin = params.boin
    const response = await searchFromContent(boin);
    return Response.json(response);

}


async function searchFromContent(boin) {

    const response = await prisma.words.findMany({
        where: {
            boin: boin,
        },
    });
    return response;
}

