"use client"

import "./style.css";
import { useState } from 'react';
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState("bi bi-list");

    const [logoColor, setLogoColor] = useState("#F2163E")

    const onClickOpen = () => {
        setIsOpen(!isOpen);
        setIcon(isOpen ? "bi bi-list" : "bi bi-x-circle");
        setLogoColor(isOpen ? "#F2163E" : "#F2F2F2");
    }



    return (
        <>
            {isOpen ? (
                <>
                    <div className="z-1 position-absolute menu position-fixed">
                        <div style={{ paddingTop: "8em" }}>
                            <nav>
                                <ul className="list">
                                    <li><h1>MENU</h1></li>
                                    <li><a href="/">HOME</a></li>
                                    <li><a href="/dajare">ダジャレ</a></li>
                                    <li><a href="/map">マップ</a></li>
                                    <li><a href="/map">お問い合わせ</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </>
            ) : null}

            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <h1 className="navbar-brand" style={{ color: logoColor, fontSize: "36px" }} href="#">出射</h1>
                    <div className="me-auto"></div>
                    <i className={icon} style={{ fontSize: "36px" }}  onClick={onClickOpen} ></i>
                </div>
            </nav>
        </>
    );
}

/*
            <div className="z-1 header position-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="title" style={{ color: logoColor }}>出射</h1>
                        </div>
                        <div className="col text-end">
                            <i className={icon} style={{ fontSize: "36px" }} onClick={onClickOpen}></i>
                        </div>
                    </div>
                </div>
            </div>
*/