"use client"

import { useState } from 'react';
import "./style.css";
export default function Header() {

    return (
        <>
            <div className="header_main">
                <div className="header_item">
                    <h1>LOGO</h1>
                    <nav>
                        <ul className="list">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/dajare">ダジャレ</a></li>
                            <li><a href="/map">マップ</a></li>
                            <li className="contact">お問い合わせ</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}


/*

    const [isClose, setIsClose] = useState(true);

    const closeClick = () => {
        setIsClose(!isClose);
    };

    console.log("test");


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

            <header className="fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-2 logo-wrapper">

                        </div>
                        <div className="col-8 text-center logo-wrapper">
                            <span className="logo">ASSHOLE</span>
                        </div>
                        <div className="col-2 text-end logo-wrapper">
                            <i className={`logo bi ${isClose ? "bi-list" : "bi-x-circle"}`} onClick={closeClick}></i>
                        </div>


                    </div>
                </div>
            </header >

        </>
    );
*/
