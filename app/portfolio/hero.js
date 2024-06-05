
import styles from './main.module.css'
import Image from 'next/image'

export default function Hero() {
    return (

        <>
        <div className={styles.profile}>
            <div className={styles.profile_text}>
                <div>
                    <h4 className={styles.profile_h5}>チャンピオンシップロードランナー</h4>
                    <h1 className={styles.privacy}>出射 拓馬</h1>
                    <h3 className={`${styles.profile_h5} ${styles.privacy}`}>Idei Takuma</h3>
                    <h4>1992-</h4>
                    <h4 className={styles.privacy}>大阪府</h4>
                </div>
            </div>
            <div className={styles.profile_image_container}>
                {/* objectFitをCSSでつけておくと、比率が維持できるっぽい*/}
                <Image src="/top/me_ver2.jpg" className={styles.profile_image}  fill />

                <h1>aaa</h1>
            </div>
        </div>
        </>
    )

}