
import styles from '../main.module.css'


import Cube from "../cube"

export default function Main() {

    return (
        <>



            <main className={styles.main}>
                <div>
                    <h2 className={styles.title}><span>ワークス</span></h2>
                </div>
                <Cube></Cube>
            </main>
        </>
    );
}