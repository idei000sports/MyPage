import Image from 'next/image'
import Rirekisyo from './rirekisyo';
import styles from '../main.module.css'

export default function About() {

    return (
        <>
            <main className={styles.main}>
                
                <section className={styles.subpage_section}>
                    <Rirekisyo />

                </section>
            </main>
        </>
    );
}