"use client"

import "./style.css";
export default function Footer() {



    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h1>出射ホームページ</h1>
                            <p>出射のホームページ</p>
                        </div>
                        <div className="col-lg-2">
                            <h1>SERVICE</h1>
                            <nav>
                                <ul className="list-unstyled">
                                    <li><a href="/">HOME</a></li>
                                    <li><a href="/dajare">ダジャレ</a></li>
                                    <li><a href="/map">マップ</a></li>
                                    <li><a href="/crud">CRUD</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2">
                            <h1>ABOUT</h1>
                            <nav>
                                <ul className="list-unstyled">
                                <   li>お問い合わせ</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
