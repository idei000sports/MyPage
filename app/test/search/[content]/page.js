"use client"
import { useState, useEffect, useCallback } from 'react';
import useSWR from "swr";
import { useRouter } from 'next/navigation';

const fetcher = url => fetch(url).then(res => res.json())

function GetOrigins(content) {
    const { data, error } = useSWR(`/api/notes/search/${content}`, fetcher);
    if (error) return "エラー"
    if (!data) return "ロード中"

    return (
        data.map((d) => (
          <div key={d.id}>
            <p>{d.id}<a href={"/test/" + d.id}>{d.content}</a></p>
          </div>
        ))
      )
}


export default function content({ params }) {

    return (
        <>
        {GetOrigins(params.content)}
        
            <p>{params.content}</p>
        </>

    );
}