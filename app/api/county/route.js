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
    const cities = await getAllCities();
    return NextResponse.json(cities);
}

async function getAllCities() {
    const cities = await prisma.county.findMany();
    return cities;
}

/*
async function isUniqueCity(country, state, county) {
    //nullじゃないとtrue　かぶってない=true
    const city = await prisma.city.findFirst({ where: { country: country, state: state, county: county } });
    //console.log(city);
    let check;
    if(city != null){
        //cityに中身があればかぶってる
        check = false;
    }else {
        //cityがnullならかぶってない
        check = true;
    }
    return check;
}
*/

export async function POST(req) {
    //const { country, state, county, lattitude, longitude } = await req.json();
    const uscounties = await req.json();
    
    try {
        await prisma.county.createMany({
            data: uscounties.map((county) => ({
                county_code: county.county_code,
                country: county.country,
                state: county.state,
                county: county.county,
                lattitude: parseFloat(county.lattitude),
                longitude: parseFloat(county.longitude),
              })),
            skipDuplicates: true, // Skip 
        })

    } catch (e) {
        console.log("被りorエラー")
        console.log(e);
        //console.log(e);
    }
    console.log("完了");
    

    const cities = await getAllCities();
    return NextResponse.json(cities);
}
