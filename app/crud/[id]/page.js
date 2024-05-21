"use client"
import { useState, useEffect, useCallback } from 'react';
import useSWR from "swr";
import { useRouter } from 'next/navigation';
import { NoteEditor } from '../_components/NoteEditor';
import { ReadSearch } from '../_components/crud';

import { Note } from '../_components/Note';


export default function id({ params }) {


    const {data, error} = ReadSearch(params.id);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <NoteEditor data={data}></NoteEditor>
        </>

    );
}