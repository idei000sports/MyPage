import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//インスタンスを作成
const prisma = new PrismaClient();



export const PATCH = async (req) => {

    const id = Number(req.query.id)
    const county = await request.json()
    // リクエストのidを元にcompletedを反転させる
    const response = await prisma.county.update({
      where: {
        id,
      },
      data: {
        county: !county,
      },
    })

    const cities = await prisma.county.findMany();
    return NextResponse.json(cities);
}