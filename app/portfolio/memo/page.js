
import styles from '../main.module.css'
import section from "./section.module.css"
import Image from 'next/image'

export default function Memo() {

    return (
        <>
            <main className={styles.main}>
                <section className={section.section0}>
                    <Image src="/top/me_ver2.jpg" style={{ objectFit: "cover", zIndex: "-1" }} alt={"me"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" fill priority={true} />
                    <div className={section.title_container}>
                        <h1 className={section.title}>aaaa</h1>
                    </div>
                </section>

                <section className={section.section1}>
                <h1>aaaa</h1>


<p>aaaaa</p>
                </section>

                <section className={section.section2}>
                <h1>aaaa</h1>


<p>aaaaa</p>
                </section>
            </main>
        </>
    );
}