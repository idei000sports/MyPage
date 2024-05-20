
"use client"

import { useState, useEffect } from 'react'

export default function Home() {

    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        fetch(`/words.csv`)
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
                        word: s[0],
                        kana: s[1],
                        boin: s[2],
                        hinshi: s[3],
                    }


                    data_array[i] = obj;
                }
                setDataArray(data_array);

                console.log("set完了")
            })
            .catch((error) => {
                console.log(`エラーが発生しました。\n${error}`);
            })
    }, [])



    const onClickImport= async () => {
        console.log("fetchasyncaddcity")

        //for (let i = 0; i < 2/*dataArray.length*/; i++) {
            // APIのURL
            const url = "/api/words/import";
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
        <>
            import
            <button onClick={onClickImport}>インポートする</button>

        </>
    )

}
