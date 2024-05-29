
"use client"



import { useState, useEffect } from 'react'
import transformTextToBoin from "./transformTextToBoin"
import { List } from './list';
import { zengo } from './zengo';

import  CommonHeader  from '../common/header'


export default function Home() {

    const [word, setWord] = useState("");
    const [boin, setBoin] = useState("");
    const [words, setWords] = useState([]);
    const [ichibuMode, setIchibuMode] = useState(false);
    const [ichibuText, setIchibuText] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    const onClickIchibu = () => {
        setIchibuMode(!ichibuMode)
    }

    const onChangeText = (e) => {
        setWord(e.target.value);
    };


    useEffect(() => {


        if (ichibuMode == true) {
            //一部モードなので受け取ったテキストの「」内を取得
            console.log("ichibuモード動作");
            let seiki = new RegExp(/「.+?」/);
            let s = "";
            if (seiki.exec(word) != null) {
                const 一文 = zengo(word)
                setBoin(transformTextToBoin(一文.mannaka));
                setIchibuText(一文);
            }
            //setWord(s);
        } else {
            setBoin(transformTextToBoin(word));
            setIchibuText({ mae: "", ato: "" })
        }


    }, [word, ichibuMode]);



    async function searchFromAPI() {
        const response = await fetch(`/api/words/search/${boin}`);

        return await response.json();
    }

    const search = async () => {
        setIsLoading(true);
        setWords([]);

        const getted = await searchFromAPI();
        //const getted = ReadSearch(boin);
        setWords(getted.length != 0 ? getted : [{ id: 0, word: "結果なし" }]);

        setIsLoading(false);

    }



    return (
        <>
            <CommonHeader/>
            <div className="container" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div className="col text-center">
                        <h2>ダジャレ作成機</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={onClickIchibu}></input>
                            <label className="form-check-label">{ichibuMode ? "一部モード" : "単語モード"}</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="" onChange={onChangeText}></input>
                            <label htmlFor="floatingInput">{ichibuMode ? "犬も歩けば「ぼう」に当たる" : "ひらがな/カタカナで入力してください"}</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <button className="form-control" onClick={search}>検索</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>{isLoading ? "ロード中" : ""}</p>
                        <List words={words} ichibuText={ichibuText} />
                    </div>

                </div>
            </div>
        </>
    )

}
