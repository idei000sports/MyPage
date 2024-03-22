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
    const cities = await prisma.city.findMany();
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

    /*
    let arr = [];

    for(let i = 0; i < uscounties.length; i++){
        let check = await isUniqueCity(uscounties[i].country, uscounties[i].state, uscounties[i].county);

        if(check == true){
            //console.log("true/かぶってない");
        
            arr.push(uscounties[i]);
            
        }else {
            //console.log("false/かぶってる");
        }
    }
    */

    for (let i = 0; i < uscounties.length; i++) {

        try {
            await prisma.city.create({
                data: {
                    country: uscounties[i].country,
                    state: uscounties[i].state,
                    county: uscounties[i].county,
                    lattitude: parseFloat(uscounties[i].lattitude),
                    longitude: parseFloat(uscounties[i].longitude),
                },
            })
        } catch (e) {
            console.log("被りorエラー")
        }
        console.log(`実行中 ${i} / ${uscounties.length - 1}`);
    }

    console.log("完了");



    const cities = await getAllCities();
    return NextResponse.json(cities);
}
