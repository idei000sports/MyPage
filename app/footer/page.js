"use client"

import "./style.css";
export default function Footer() {



    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <h1>出射ホームページ</h1>
                            <p>出射のホームページ</p>
                        </div>
                        <div className="col">
                        </div>
                        <div className="col">
                            <h1>MENU</h1>
                            <nav>
                                <ul>
                                    <li><a href="/">HOME</a></li>
                                    <li><a href="/dajare">ダジャレ</a></li>
                                    <li><a href="/map">マップ</a></li>
                                    <li>お問い合わせ</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col"></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
