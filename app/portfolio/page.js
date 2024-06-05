
import styles from './main.module.css'

import Slide from "./slide"
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
                        <section className={styles.section}>
                            <h2 className={styles.title}><span>コンテンツ</span></h2>
                            <Slide />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}