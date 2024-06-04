
import styles from './main.module.css'
import Image from 'next/image'
import Link from "next/link"

import Slide from "./slide"
import Cube from "./cube"
import Hero from "./hero"

export default function Main() {

    return (
        <>



            <main className={styles.main}>
                <div className={styles.container}>
                    <Hero />


                    <h2 className={styles.title}><span>Contents</span></h2>
                    <Slide />

                </div>
            </main>
        </>
    );
}