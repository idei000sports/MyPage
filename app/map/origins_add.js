
import { useState, useEffect } from 'react';


export default function OriginsAdd() {

    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        fetch(`/origins.csv`)
            .then((res) => {
                if (!res.ok) {
                    console.log('正常にリクエストを処理できませんでした。');
                }
                return res.text();
            })
            .then((csv_data) => {

                const data_string = csv_data.split('\r\n');
                //csvのヘッダを削除
                data_string.shift();
                const data_array = []


                for (let i = 0; i < data_string.length; i++) {
                    
                    let s = data_string[i].split(',');

                    let obj = {
                        name: s[0],
                        country: "U.S.",
                        state: s[2],
                        county: s[3],
                        formation: Number(s[4]),
                        dissolution: Number(s[5]),
                        genres:[s[6],s[7],s[8]]

                    }


                    data_array[i] = obj;
                }
                setDataArray(data_array);
            })
            .catch((error) => {
                console.log(`エラーが発生しました。\n${error}`);
            })
    }, [])



    const fetchAsyncAddOrigin = async () => {
        console.log("fetchasyncaddcity")

        //for (let i = 0; i < 2/*dataArray.length*/; i++) {
            // APIのURL
            const url = "/api/origin";
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


            <h1>add page</h1>


        </div>
    )
}

