"use client"
import { useState, useEffect, useCallback } from 'react';
import useSWR from "swr";
import { useRouter } from 'next/navigation';

import { update, del } from '../_components/crud';

const fetcher = url => fetch(url).then(res => res.json())

function GetOrigins(props) {
    const { data, error } = useSWR(`/api/notes/${props.id}`, fetcher);
    if (error) return "エラー"
    if (!data) return "ロード中"

    return data;
}



export default function id({ params }) {
    const router = useRouter();

    const data = GetOrigins(params);
    const [text, setText] = useState("");

    const onChangeText = (e) => {
        setText(e.target.value);
    }


    const onClickUpdate = async () => {
        update(params.id, text);
        router.push('/test');
        
    }

    const onClickDelete = async () => {
        del(params.id);
        router.push('/test');
    }




    return (
        <>
            <input className="form-control" type="text" onChange={onChangeText}  defaultValue={data.content}></input>
            <button className="form-control" type='submit' onClick={onClickUpdate}>修正</button>
            <button className="form-control" type='submit' onClick={onClickDelete}>削除</button>
        </>

    );
}