
import styles from '../main.module.css'

export default function Memo() {

    return (
        <>
            <main className={styles.main}>

                <div>
                    <h2 className={styles.title}><span>メモ</span></h2>
                </div>

                <div className={styles.container}>
                    <p>
                        メモ置き場
                    </p>
                </div>
            </main>
        </>
    );
}