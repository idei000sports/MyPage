import Image from 'next/image'

import styles from '../main.module.css'

export default function About() {

    return (
        <>
            <main className={styles.main}>

                <div>
                    <h2 className={styles.title}><span>アバウト</span></h2>
                </div>
                <dl className={styles.dl}>
                    <div>
                        <dt>
                            aa
                        </dt>

                        <dd>aa</dd>
                    </div>
                </dl>
            </main>
        </>
    );
}