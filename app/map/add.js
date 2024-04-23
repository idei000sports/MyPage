
import { useState, useEffect } from 'react';


export default function Add() {

    const test = () => {
        console.log("test");
    }

    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        fetch(`/uscounties.csv`)
            .then((res) => {
                if (!res.ok) {
                    console.log('正常にリクエストを処理できませんでした。');
                }
                return res.text();
            })
            .then((csv_data) => {

                const data_string = csv_data.split('\r\n');
                const data_array = []

                for (let i = 0; i < data_string.length; i++) {
                    let s = data_string[i].split(',');

                    let obj = {
                        country: "U.S.",
                        state: s[5],
                        county: s[1],
                        lattitude: s[6],
                        longitude: s[7],
                    }


                    data_array[i] = obj;
                }
                setDataArray(data_array);
            })
            .catch((error) => {
                console.log(`エラーが発生しました。\n${error}`);
            })
    }, [])



    const fetchAsyncAddCity = async () => {
        console.log("fetchasyncaddcity")

        //for (let i = 0; i < 2/*dataArray.length*/; i++) {
            // APIのURL
            const url = "/api/county";
            // リクエストパラメータ
            const params = {
                method: "POST",
                // JSON形式のデータのヘッダー
                headers: {
                    "Content-Type": "application/json",
                },
                // リクエストボディ
                body: JSON.stringify(dataArray)
            };

            // APIへのリクエスト
            await fetch(url, params);
        //}
    };


    return (
        <div>
            <button onClick={fetchAsyncAddCity}>cityデータ追加</button>

            <h1>add page</h1>


        </div>
    )
}

