import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {


    return (
        <main>
            <div>
                <div className={styles.background}>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <div className={styles.top_image}>
                                    <div className={styles.content}>
                                        <h1>こんにちは</h1>
                                        <h2>ああああああああああああああああああ</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

/*
        <div className={styles.main}>
            <div className={styles.background}>

            </div>
        </div>
*/
