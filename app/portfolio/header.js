"use client";

import styles from "./header.module.css"

import Link from "next/link"
import { motion } from "framer-motion"

import { useState } from "react";


export default function Header() {

    const [isOpen, setIsOpen] = useState(true);
    const [toggle, setToggle] = useState(styles.hide);
    const onClickOpen = () => {
        console.log("click")
        setIsOpen(!isOpen);
        setToggle(isOpen ? "" : styles.hide)

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
            <header className={styles.header}>
                <h1 className={styles.logo}><ListItem title="出射ホームページ" href="/portfolio" /></h1>

                <nav className={styles.pc_nav} onClick={onClickOpen}>
                    <ul>

                        <li><ListItem title="アバウト" href="/portfolio/about" /></li>
                        <li><ListItem title="ワークス" href="/portfolio/works" /></li>
                        <li><ListItem title="メモ" href="/portfolio/memo" /></li>

                    </ul>
                </nav>


                <nav className={`${styles.sp_nav} ${toggle}`} onClick={onClickOpen}>
                    <ul>
                        <li><ListItem title="アバウト" href="/portfolio/about" /></li>
                        <li><ListItem title="ワークス" href="/portfolio/works" /></li>
                        <li><ListItem title="メモ" href="/portfolio/memo" /></li>
                    </ul>
                </nav>

                <i className={`bi bi-list ${styles.humburger}`} onClick={onClickOpen}></i>





            </header>

        </>

    )
}