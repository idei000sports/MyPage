"use client"

import { useState, useEffect } from 'react';
import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/county', fetcher)
    const [name, setName] = useState("");
    const [countyCode, setCountyCode] = useState("");
    const [formation, setFormation] = useState(0);
    const [dissolution, setDissolution] = useState(0);

    const [genre1, setGenre1] = useState("");
    const [genre2, setGenre2] = useState("");
    const [genre3, setGenre3] = useState("");




    const fetchAsyncAddOrigin = async () => {
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
            body: JSON.stringify({
                name: name,
                county_code: countyCode,
                formation: Number(formation),
                dissolution: Number(dissolution),
                genres: [genre1, genre2, genre3]
            })
        };

        // APIへのリクエスト
        await fetch(url, params);


    };


    // エラーハンドリング
    if (error) return <main><div>データの取得に失敗しました。</div></main>

    // データがまだ取得されていない場合のハンドリング
    if (!data) return <main><div>読み込み中...</div></main>



    return (
        <main>
            <div className="container pb-4">
                <h1>追加画面あああ</h1>
            </div>
            <form>
                <div className="container pt-4">
                    <div className="row pt-4">
                        <div className="col">
                            <label>バンド名</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col">
                            <label>county_code</label>
                            <select class="form-select" onChange={(e) => setCountyCode(e.target.value)}>
                                {data.map((item) => (
                                    <option value={item.county_code}>
                                        {`${item.county}(${item.state}州)`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div className="row pt-4">
                        <div className="col">
                            <label>結成年</label>
                            <input type="text" className="form-control" value={formation} onChange={(e) => setFormation(e.target.value)} placeholder="formation" />
                        </div>
                        <div className="col">
                            <label>解散年</label>
                            <input type="text" className="form-control" value={dissolution} onChange={(e) => setDissolution(e.target.value)} placeholder="dissolution" />
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col">
                            <input type="text" className="form-control" value={genre1} onChange={(e) => setGenre1(e.target.value)} placeholder="genre1" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={genre2} onChange={(e) => setGenre2(e.target.value)} placeholder="genre2" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={genre3} onChange={(e) => setGenre3(e.target.value)} placeholder="genre3" />
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col">
                            <button className="btn btn-primary" onClick={fetchAsyncAddOrigin}>追加</button>
                        </div>
                    </div>

                </div>
            </form>


        </main>
    )
}
