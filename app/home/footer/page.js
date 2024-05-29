"use client"

import "./style.css";
import styles from "../page.module.css"
export default function Footer() {



    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h2>出射ホームページ</h2>
                            <p>出射のホームページ</p>
                        </div>
                        <div className="col-lg-2">
                            <h2>SERVICE</h2>
                            <nav>
                                <ul className="list-unstyled">
                                    <li className={styles.li}><a href="/home">HOME</a></li>
                                    <li className={styles.li}><a href="/dajare">ダジャレ</a></li>
                                    <li className={styles.li}><a href="/map">マップ</a></li>
                                    <li className={styles.li}><a href="/crud">CRUD</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2">
                            <h2>ABOUT</h2>
                            <nav>
                                <ul className="list-unstyled">
                                <li className={styles.li}><a href="/home/infomation" >お問い合わせ</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
