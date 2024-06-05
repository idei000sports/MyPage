
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
                    <div className={styles.behind}>
                        <Hero />
                    </div>

                    <div className={styles.front}>
                        <section>
                            <h2 className={styles.title}><span>コンテンツ</span></h2>
                            <Slide />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}