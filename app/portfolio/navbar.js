"use client";

import style from "./navbar.module.css"
import Link from "next/link"
import { motion } from "framer-motion"

import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true);
    const [toggle, setToggle] = useState(style.hide);
    const onClickOpen = () => {
        setIsOpen(!isOpen);
        setToggle(isOpen ? "" : style.hide)

    }

    //アニメーションさせる
    const ListItem = ({ title, href }) => {
        return (
            <motion.div
                whileHover={{ scale: 1.1, color: "#F23838" }}
                whileTap={{ scale: 0.9 }}
            >
                <Link href={href}>{title}</Link>
            </motion.div>
        )
    }

    return (
        <>
            <header className={style.navbar}>
                <div className={style.container}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className={style.title}>
                            <Link href="/portfolio" ><h1>出射ホームページ</h1></Link>
                        </div>

                    </motion.div>
                    <nav className={style.pc_nav}>
                        <ul>
                            <li><ListItem title="アバウト" href="/portfolio/about" /></li>
                            <li><ListItem title="ワークス" href="/portfolio/works" /></li>
                            <li><ListItem title="メモ" href="/portfolio/memo" /></li>
                        </ul>
                    </nav>

                    <nav className={`${style.sp_nav} ${toggle}`} onClick={onClickOpen}>
                        <ul>
                            <li><h1><ListItem title="アバウト" href="/portfolio/about" /></h1></li>
                            <li><h1><ListItem title="ワークス" href="/portfolio/works" /></h1></li>
                            <li><h1><ListItem title="メモ" href="/portfolio/memo" /></h1></li>
                        </ul>
                    </nav>

                    <div className={style.humburger} onClick={onClickOpen}>
                        <span></span>
                    </div>
                </div>
            </header>
        </>
    );
}

/*
                <nav className={`${style.sp_nav} ${toggle}`}  onClick={onClickOpen}>
                    <ul>
                        <li><ListItem title="About" href="/portfolio/about" /></li>
                        <li><ListItem title="Works" href="/portfolio/works" /></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li></li>
                    </ul>
                </nav>
*/