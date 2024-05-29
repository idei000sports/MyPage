"use client"

import "./style.css";
import styles from "../page.module.css"
import { useState } from 'react';
export default function Header() {

    const [show, setShow] = useState("hide");
    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState("bi bi-list");

    const [logoColor, setLogoColor] = useState("#F2163E")

    const onClickOpen = () => {
        setIsOpen(!isOpen);

        setShow(isOpen ? "hide" : "show");
        setIcon(isOpen ? "bi bi-list" : "bi bi-x-circle");
        setLogoColor(isOpen ? "#F2163E" : "#F2F2F2");
    }



    return (
        <>
            <div className={show}>
                <div className="z-1 position-absolute menu position-fixed">
                    <div className="container" style={{ paddingTop: "8em" }}>
                        <nav>
                            <ul className="list">
                                <li><h2>MENU</h2></li>
                                <li className={styles.li}><a href="/home">HOME</a></li>
                                <li className={styles.li}><a href="/dajare">ダジャレ</a></li>
                                <li className={styles.li}><a href="/map">マップ</a></li>
                                <li className={styles.li}><a href="/home/infomation">お問い合わせ</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>


            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a href="/" className="logo h1" style={{ color: logoColor }}>出射</a>
                    <div className="me-auto"></div>
                    <i className={icon} style={{ fontSize: "36px" }} onClick={onClickOpen} ></i>
                </div>
            </nav>
        </>
    );
}

/*
{isOpen ? (
    <>
        <div className={fade}>
            <div className="z-1 position-absolute menu position-fixed">
                <div className="container" style={{ paddingTop: "8em" }}>
                    <nav>
                        <ul className="list">
                            <li><h1>MENU</h1></li>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/dajare">ダジャレ</a></li>
                            <li><a href="/map">マップ</a></li>
                            <li><a href="/infomation">お問い合わせ</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </>
) : null}

*/