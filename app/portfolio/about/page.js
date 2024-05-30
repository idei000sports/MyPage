import Image from 'next/image'

import styles from './styels.module.css'

export default function About() {

    return (
        <>
            <main>
                <section className={styles.title_panel}>
                    <h2>アバウト</h2>
                </section>

                <div className={styles.profile}>
                    <div className={styles.profile_image}>
                        <Image src="/top/me_ver2.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className={styles.profile_text}>
                        <dl>
                            <dt>名前 : </dt>
                            <dd className={styles.privacy}>出射 拓馬</dd>

                            <dt>所在地 : </dt>
                            <dd className={styles.privacy}>大阪府</dd>

                            <dt>お問い合わせ : </dt>
                            <dd>@gmail.com</dd>
                        </dl>
                    </div>
                </div>
            </main>
        </>
    );
}