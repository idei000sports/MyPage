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
    const origins = await getAllOrigins();
    return NextResponse.json(origins);
}

async function getAllOrigins() {
    const origins = await prisma.origin.findMany();
    return origins;
}




async function isUniqueOrigin(name, country, state, county) {
    //nullじゃないとtrue　かぶってない=true
    const origin = await prisma.origin.findFirst({ where: { name: name, country: country, state: state, county: county } });
    //console.log(city);
    let check;
    if(origin != null){
        //cityに中身があればかぶってる
        check = false;
    }else {
        //cityがnullならかぶってない
        check = true;
    }
    return check;
}


export async function POST(req) {
    //const { country, state, county, lattitude, longitude } = await req.json();
    const origins = await req.json();


    let arr = [];

    for(let i = 0; i < origins.length; i++){
        let check = await isUniqueOrigin(origins[i].name, origins[i].country, origins[i].state, origins[i].county);

        if(check == true){
            //console.log("true/かぶってない");
        
            arr.push(origins[i]);
            
        }else {
            //console.log("false/かぶってる");
        }
    }


    for(let i = 0; i < arr.length; i++){

        console.log(arr[i])
        
        await prisma.origin.create({
            data: {
                name: arr[i].name,
                country: arr[i].country,
                state: arr[i].state,
                county: arr[i].county,
                formation: arr[i].formation,
                dissolution: arr[i].dissolution,
            },
        })

        console.log(`実行中 ${i} / ${arr.length - 1}`);
        
    }

    console.log("完了");
    


    const edited_origins = await getAllOrigins();
    return NextResponse.json(edited_origins);
}
