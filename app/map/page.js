"use client"
import dynamic from "next/dynamic";
import React from "react";
import { useState, useEffect } from 'react';

export default function Home() {

    
    const [origins, setOrigins] = useState([]);
    const [cities, setCities] = useState([{ county: "dummy", lattitude: 0, longitude: 0 }]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/origin');
            const json = await response.json();
            setOrigins(json);
            console.log("origin 読み込んだ")
        };
        fetchNotes();
    }, []);

    
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/county');
            const json = await response.json();
            setCities(json);
            console.log("city 読み込んだ")

        };
        fetchNotes();
    }, []);



    const Map = React.useMemo(
        () =>
            dynamic(() => import("./map"), {
                loading: () => <p>A map is loading</p>,
                ssr: false
            }),
        []
    );


    return (
        <div>

            <Map origins={origins} cities={cities} />


        </div>
    )
}
/*



*/
