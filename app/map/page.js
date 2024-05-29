"use client"
import dynamic from "next/dynamic";
import React from "react";
import { useState, useEffect } from 'react';
import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())


export default function Home() {

    
    const Map = React.useMemo(
        () =>
            dynamic(() => import("./map"), {
                loading: () => <main><p>A map is loading</p></main>,
                ssr: false
            }),
        []
    );

    
    const { data: origins } = useSWR('/api/origin', fetcher)
    const { data: cities } = useSWR('/api/county', fetcher)

    if (!origins || !cities) return <main><div>読み込み中...</div></main>;




    return (
        <>
            <div className="container" style={{paddingTop: "2em"}}>
                <Map origins={origins} cities={cities}/>
            </div>
        </>
    )
}
/*



*/
