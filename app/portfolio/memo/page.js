
import styles from '../main.module.css'
import section from "./section.module.css"
import Image from 'next/image'

export default function Memo() {
    //                    <Image src="/top/me_ver2.jpg" style={{ objectFit: "cover", zIndex: "-1" }} alt={"me"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" fill priority={true} />

    return (
        <>
            <main className={styles.main}>
                <div className={section.behind}>
                    <section>
                        <Image src="/top/me_ver2.jpg" fill className={section.background_image}></Image>
                        <div className={section.title_container}>
                            <h1 className={section.title}>メモのページ</h1>
                        </div>
                    </section>
                </div>

                <div className={section.front}>
                    <section className={section.section}>
                        <Image src="/illust/dok.png" fill className={section.background_image}></Image>
                        <div className={section.title_container}>
                            <h1 className={section.title}>title</h1>
                        </div>
                    </section>

                    <section className={section.section}>
                        <Image src="/illust/dok.png" fill className={section.background_image}></Image>
                    </section>

                    <section className={section.section}>
                        <Image src="/illust/dok.png" fill className={section.background_image}></Image>
                        <h1>aaaa</h1>


                        <p>aaaaa</p>
                    </section>
                </div>
            </main>
        </>
    );
}