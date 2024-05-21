"use client"

import "./style.css";
export default function Header() {

    return (
        <>
            <div className="header_main">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h1>ロゴ</h1>
                        </div>
                        <div className="col-lg-2">
                            <nav>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="/">HOME</a></li>
                                    <li className="list-inline-item"><a href="/dajare">ダジャレ</a></li>
                                    <li className="list-inline-item"><a href="/map">マップ</a></li>
                                    <li className="list-inline-item">お問い合わせ</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}