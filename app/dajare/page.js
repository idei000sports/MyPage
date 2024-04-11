
"use client"

import boin from '../prisma_test/transformTextToBoin'

import { useState, useEffect } from 'react'


//taliwind

export default function Home() {

    const [words, setWords] = useState("");
    
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/words?id=11');
            const json = await response.json();

            setWords(json);
            console.log("words 読み込んだ")
        };
        fetchNotes();
    }, []);
    

    //モード切り替えのセレクター
    const options = [
        { value: 'tango', label: '単語' },
        { value: 'ichibu', label: '一部' },
    ]


    //const [text, setText] = useState("");
    /*
    const [isClicked, setClick] = useState(false)


    const [word, setWord] = useState("");
    const [wordList, setWordList] = useState([]);

    //モード情報
    const [mode, setMode] = useState("tango");

    const [searchWord, setSearchWord] = useState("");
    const [ichibuText, setIchibuText] = useState([]);
    const [info, setInfo] = useState("");
    const [sample, setSample] = useState("");

    */

    //入力情報取得
    /*
    const onChangeWord = ((e) => {


        console.log(words);
        if (mode == "tango") {
            //単語モードなので受け取ったテキストそのままで動作
            console.log("tangoモード動作")
            setText(e.target.value);
            setSearchWord(boin(e.target.value));
        } else if (mode == "ichibu") {
            //一部モードなので受け取ったテキストの[]内を取得
            console.log("ichibuモード動作");
            let seiki = new RegExp(/「.+?」/);
            let s = "";
            if (seiki.exec(e.target.value) != null) {
                //正規表現で周りを削除
                s = seiki.exec(e.target.value)[0]
                //[]を外す
                s = s.slice(1);
                s = s.slice(0, -1);
                setSearchWord(boin(s));
                console.log("[]の中" + s);

                seiki = new RegExp(/(.*)(?=「)/);
                let mae = seiki.exec(e.target.value)[0];
                console.log("[]の前" + mae);

                seiki = new RegExp(/(?<=」)(.*)/);
                let ato = seiki.exec(e.target.value)[0];
                console.log("[]の後" + ato);

                let arr = [mae, ato];
                setIchibuText(arr);
            }
            setText(s);
        }
    })

    */




    /*

    const onClickMode = useCallback((now_mode) => {
        if (now_mode == "ichibu") {
            setMode("tango");
            setIchibuText(["", ""])
            setInfo("ひらがな/カタカナで入力してください")
            setSample("だじゃれ");
            setClick(true);

        } else if (now_mode == "tango") {
            setMode("ichibu");
            setInfo("変換したいひらがな/カタカナを「」でくくってください")
            setSample("「いしばし」を叩いて渡る")
            setClick(false);
        }
    }, []);
    */

    /*
    //検索ワードから検索する
    useEffect(() => {
        db(searchWord);
    }, [searchWord])//useEffect
    */

    /*
    useEffect(() => {
        const fetchNotes = async () => {

            const params = {
                method: "TEST",
                // JSON形式のデータのヘッダー
                // リクエストボディ
                body: JSON.stringify({ id: "123", name: "しゅう" })
            };


            const response = await fetch(`/api/words`);
            console.log("origin 読み込んだ")
        };
        fetchNotes();
    }, [searchWord]);
    */


    /*
    //db接続(母音一致)
    async function db(boin) {
        const { data: words, error } = await supabase
            .from("test_kanas")
            .select('*').eq('boin', boin)
        //console.log(t);
        setWordList(words);
    }
    */
    //const [dataArray, setDataArray] = useState([]);
    /*
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
    
                    //csvのヘッダを削除
                    data_string.shift();
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
                    console.log("準備完了");
    
                    console.log(data_array.length)
                })
                .catch((error) => {
                    console.log(`エラーが発生しました。\n${error}`);
                })
        }, [])
    */


    /*
    const fetchAsyncAddWords = async () => {
        console.log("fetchasyncaddword")

        // APIのURL
        const url = "/api/words";
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

    */

    /*
    return (

        <>

            
            <button onClick={fetchAsyncAddWords}>wordsデータ追加</button>
            <div className="container pt-4">
                <div className="row pt-4">
                    <div className="col">
                        <button onClick={() => { onClickMode("tango") }}>単語</button>
                    </div>
                    <div className="col">
                        <button onClick={() => { onClickMode("ichibu") }}>一部</button>

                        <button onClick={() => { onClickMode(mode) }}>{mode}</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>{info}</p>
                        <textarea type="text" id="textbox" name="input" onChange={onChangeWord} placeholder={sample} ></textarea>
                    </div>
                </div>
                <div className="row" >
                    <div className="col">

                        <ul className="w-full">
                            <li>{text}</li>
                            {wordList.map((item, index) => (
                                <li key={index}>
                                    <span>{ichibuText[0]}</span><span>  </span><ruby>{item.word}<rt>{item.kana}</rt></ruby><span> </span>  <span className="text-xl">{ichibuText[1]}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
    */

    return (
        <>

            <p>aaa</p>
        </>
    )
}
