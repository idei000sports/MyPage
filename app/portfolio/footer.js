import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_logo}>
                        <h1>出射ホームページ</h1>
                    </div>

                    <nav className={styles.footer_nav}>
                        <ul>
                            <li><Link href="/portfolio/about" >アバウト</Link></li>
                            <li><Link href="/portfolio/works" >ワークス</Link></li>
                            <li><Link href="/portfolio/memo" >メモ</Link></li>
                        </ul>
                    </nav>

                    <p className={styles.copylight}>(c)2024 Idei</p>

                </div>

            </footer>
        </>
    );
}