"use client"

import Link from "next/link";
import Script from 'next/script'
import { useState } from 'react';


export default function Header() {

    const [isClose, setIsClose] = useState(true);

    const closeClick = () => {
        setIsClose(!isClose);
    };


    return (
        <>
            <div className={`container-fluid d-flex fixed-top mynav ${isClose ? "d-none" : ""}`}>
                <div className="row align-items-center rowkun text-white">
                    <div className="col"></div>
                    <div className="col">
                        <h1>ケツ</h1>
                        <h3>尻肉</h3>
                        <h3>肛門</h3>
                        <h3>ケツ</h3>
                    </div>
                    <div className="col">
                        <h1>股間</h1>
                        <h3>チンポ</h3>
                        <h3>チン毛</h3>
                        <h3>キンタマ</h3>
                    </div>
                    <div className="col"></div>
                </div>

            </div>

            <header className="fixed-top text-white">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-center">
                            <h1 className="logo">ASSHOLE</h1>
                        </div>
                        <div className="col text-end">
                            <i className={`logo bi ${isClose ? "bi-list" : "bi-x-circle"}`} onClick={closeClick}></i>
                        </div>
                    </div>
                </div>
            </header >

        </>
    );
}