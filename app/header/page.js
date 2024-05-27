"use client"

import "./style.css";
import { useState } from 'react';
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState("bi bi-list");

    const onClickOpen = () => {
        setIsOpen(!isOpen);

        setIcon(isOpen ? "bi bi-list" : "bi bi-x-circle");
    }



    return (
        <>
            {isOpen ? (
                <>
                    <div className="z-1 position-absolute menu d-flex align-items-center">
                        <h1>aa</h1>
                        <nav>
                            <ul className="list-inline">
                                <li className="list-item"><a href="/">HOME</a></li>
                                <li className="list-item"><a href="/dajare">ダジャレ</a></li>
                                <li className="list-item"><a href="/map">マップ</a></li>
                                <li className="list-item"><a href="/map">お問い合わせ</a></li>
                            </ul>
                        </nav>
                    </div>
                </>
            ) : null}


            <div className="z-1 position-absolute header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col text-center">
                            <h1>ヘイ</h1>
                        </div>
                        <div className="col text-end">
                            <i className={icon} style={{ fontSize: "36px" }} onClick={onClickOpen}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/*

*/