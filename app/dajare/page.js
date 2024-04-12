
"use client"
import { useState, useEffect } from 'react'
import { Suspense } from 'react';
import Word from "./Word"
import transformTextToBoin from "./transformTextToBoin"


export default function Home() {

    const [word, setWord] = useState("");
    const [boin, setBoin] = useState("");
    const [words, setWords] = useState([]);
    const [ichibuMode, setIchibuMode] = useState(false);
    const [nowMode, setNowMode] = useState("単語モード");
    const [ichibuText, setIchibuText] = useState([]);

    const [loadChu, setLoadChu] = useState("");

    const [formText, setFormText] = useState("");


    const onClickIchibu = () => {
        setIchibuMode(!ichibuMode)
    }

    const onChangeText = (e) => {
        setWord(e.target.value);
    };


    useEffect(() => {
        setNowMode(ichibuMode ? "一部モード" : "単語モード");
        setFormText(ichibuMode ? "検索したい部分のみを「」で囲んでください（犬も歩けば「ぼう」に当たる）" : "ひらがな/カタカナで入力してください");

        if (ichibuMode == true) {
            //一部モードなので受け取ったテキストの[]内を取得
            console.log("ichibuモード動作");
            let seiki = new RegExp(/「.+?」/);
            let s = "";
            if (seiki.exec(word) != null) {
                let obj = {
                    mae: "",
                    ato: "",
                }
                //正規表現で周りを削除
                s = seiki.exec(word)[0]
                //[]を外す
                s = s.slice(1);
                s = s.slice(0, -1);
                setBoin(transformTextToBoin(s));
                console.log("[]の中" + s);

                seiki = new RegExp(/(.*)(?=「)/);
                obj.mae = seiki.exec(word)[0];
                seiki = new RegExp(/(?<=」)(.*)/);
                obj.ato = seiki.exec(word)[0];


                setIchibuText(obj);
            }
            //setWord(s);
        } else {
            setBoin(transformTextToBoin(word));
            setIchibuText({ mae: "", ato: "" })
        }


    }, [word, ichibuMode]);


    const searchFromAPI = async () => {
        //suspenstion?を使いたい

        setLoadChu("ロード中");
        setWords([]);

        const response = await fetch('/api/words', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ boin: boin }),
        });

        const getted = await response.json();
        setWords(getted.length != 0 ? getted : [{id: 0, word: "結果なし"}]);
        setLoadChu("");

    };






    return (
        <>

            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col text-center">
                        <p className="h1">ダジャレ替え歌作成機</p>

                    </div>
                </div>
            </div>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={onClickIchibu}></input>
                            <label className="form-check-label">{nowMode}</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="" onChange={onChangeText}></input>
                            <label htmlFor="floatingInput">{formText}</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <button className="form-control" onClick={searchFromAPI}>検索</button>
                    </div>
                </div>

            </div>

            <p>{loadChu}</p>


            <div className="container">
                <div className="row">
                    <div className="col">

                        {words.map((word) => (
                            <div key={word.id}>
                                <ul className="list-group list-group-flush">
                                    <Word word={word} ichibuText={ichibuText} />
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        </>
    )

}
