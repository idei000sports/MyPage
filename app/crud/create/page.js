"use client"

import { useState, useEffect, useCallback } from 'react';

import { create } from '../_components/crud';
import { useRouter } from 'next/navigation';


export default function Create() {
    const router = useRouter();

    const [content, setContent] = useState("");

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onClickCreate = async () => {
        create(content);
        router.push('/crud');
    }

    return (
        <>
            <input className="form-control" type="text" onChange={onChangeContent}></input>
            <button className="form-control" type='submit' onClick={onClickCreate}>追加</button>
        </>
    );
}