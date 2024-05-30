"use client";

import Link from "next/link"
import { motion } from "framer-motion"

import {useState} from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true);
    const [toggle, setToggle] = useState("hide");
    const onClickOpen = () => {
        setIsOpen(!isOpen);
        setToggle(isOpen ? "":"hide")
        
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
            <header>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <h1><Link href="/portfolio">出射ホームページ</Link></h1>
                </motion.div>
                <nav className="pc_nav">
                    <ul>
                        <li><ListItem title="About" href="/portfolio/about" /></li>
                        <li><ListItem title="Works" href="/portfolio/works" /></li>
                        <li></li>
                    </ul>
                </nav>
                <nav className={`sp_nav ${toggle}`}  onClick={onClickOpen}>
                    <ul>
                        <li><ListItem title="About" href="/portfolio/about" /></li>
                        <li><ListItem title="Works" href="/portfolio/works" /></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li></li>
                    </ul>
                </nav>
                <div id="humburger" onClick={onClickOpen}>
                    <span></span>
                </div>
            </header>
        </>
    );
}