"use client"

import { useState, useEffect } from 'react';
const autoComplete = require("@tarekraafat/autocomplete.js");


export default function Home() {




    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [county, setCounty] = useState("");
    const [city, setCity] = useState("");
    const [formation, setFormation] = useState(0);
    const [dissolution, setDissolution] = useState(0);

    const [genre1, setGenre1] = useState("");
    const [genre2, setGenre2] = useState("");
    const [genre3, setGenre3] = useState("");

    const [cities, setCities] = useState([{ county: "dummy", lattitude: 0, longitude: 0 }]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/cityName');
            const json = await response.json();

            setCities(json);
            console.log("city 読み込んだ")
        };
        fetchNotes();
    }, []);

    useEffect(() => {
        let statesArr = [];
        let countysArr = [];

        for (let county in cities) {
            if (statesArr.indexOf(cities[county].state) == -1) {
                statesArr.push(cities[county].state);
            }

            countysArr.push(cities[county].county);
        }
        const countyForm = new autoComplete({
            selector: "#county",
            placeHolder: "county",
            data: {
                src: countysArr
            },
            resultItem: {
                highlight: true,
            },
            events: {
                input: {
                    selection: (event) => {
                        countyForm.input.blur();
                        const selection = event.detail.selection.value;
                        setCounty(selection);
                    }
                }
            },
        });

        const stateForm = new autoComplete({
            selector: "#state",
            placeHolder: "state",
            data: {
                src: statesArr
            },
            resultItem: {
                highlight: true,
            },
            events: {
                input: {
                    selection: (event) => {
                        stateForm.input.blur();
                        const selection = event.detail.selection.value;
                        setState(selection);
                    }
                }
            },
        });

        console.log(statesArr)
    }, [cities])




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
                country: country,
                state: state,
                county: county,
                city: city,
                formation: Number(formation),
                dissolution: Number(dissolution),
                genres: [genre1, genre2, genre3]
            })
        };

        // APIへのリクエスト
        await fetch(url, params);


    };
    return (
        <div>
            <div className="container pb-4">
                <h1>追加</h1>
            </div>
            <form>
                <div className="container pt-4">
                    <div className="row pt-4">
                        <div className="col">
                            <label>バンド名</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                        </div>
                        <div className="col">
                            <label>国</label>
                            <input type="text" className="form-control"  value={country} onChange={(e) => setCountry(e.target.value)} placeholder="country" />
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col">
                            <label>州</label>
                            <input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="state" />
                        </div>
                        <div className="col">
                            <label>郡</label>
                            <input type="text"className="form-control"  id="county" value={county} onChange={(e) => setCounty(e.target.value)} placeholder="county" />
                        </div>
                        <div className="col">
                            <label>市</label>
                            <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} placeholder="city" />
                        </div>
                    </div>



                    <div className="row pt-4">
                        <div className="col">
                        <label>結成年</label>
                            <input type="text" className="form-control"  value={formation} onChange={(e) => setFormation(e.target.value)} placeholder="formation" />
                        </div>
                        <div className="col">
                        <label>解散年</label>
                            <input type="text"className="form-control"  value={dissolution} onChange={(e) => setDissolution(e.target.value)} placeholder="dissolution" />
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col">
                            <input type="text" className="form-control"  value={genre1} onChange={(e) => setGenre1(e.target.value)} placeholder="genre1" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" value={genre2} onChange={(e) => setGenre2(e.target.value)} placeholder="genre2" />
                        </div>
                        <div className="col">
                            <input type="text"className="form-control"  value={genre3} onChange={(e) => setGenre3(e.target.value)} placeholder="genre3" />
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col">

                            <button className="btn btn-primary" onClick={fetchAsyncAddOrigin}>追加</button>
                        </div>
                    </div>

                </div>
            </form>


        </div>
    )
}
