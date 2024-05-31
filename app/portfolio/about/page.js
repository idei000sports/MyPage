import Image from 'next/image'

import styles from '../main.module.css'

export default function About() {

    return (
        <>
            <main className={styles.main}>

                <div>
                    <h2 className={styles.title}><span>アバウト</span></h2>
                </div>

                <div className={styles.container}>
                    <dl className={styles.dl}>
                        <div>
                            <dt>名前</dt>
                            <dd>出射</dd>
                        </div>
                        <div>
                            <dt>名前</dt>
                            <dd>出射</dd>
                        </div>
                        <div>
                            <dt>名前</dt>
                            <dd>出射</dd>
                        </div>
                    </dl>
                </div>
            </main>
        </>
    );
}