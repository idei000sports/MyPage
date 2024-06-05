import styles from "./rirekisyo.module.css"
import Image from "next/image";

export default function Rirekisyo() {

    return (
        <>
            <div className={styles.rirekisyo}>
                <div className={styles.hidari}>

                    <div className={styles.title}>
                        <div>履歴書</div>
                        <div className={styles.date}>2024年06月05日現在</div>
                    </div>

                    <div className={styles.grid_name}>
                        <div className={styles.枠名_氏名_ふりがな}>ふりがな</div>
                        <div className={styles.氏名_ふりがな}>いでい たくま</div>
                        <div className={styles.枠名_氏名}>氏名</div>
                        <div className={styles.氏名_漢字}>出射 拓馬</div>
                        <div className={styles.男女}>男</div>
                        <div className={styles.枠名_生年月日}>生年月日</div>
                        <div className={styles.生年月日}>平成4年10月28日(満31歳)</div>
                        <div className={styles.顔写真}>
                            <Image src="/top/me_ver2.jpg" className={styles.profile_image}  fill />
                        </div>
                    </div>

                    <div className={styles.address}>
                        <div className={styles.枠名_住所_ふりがな}>ふりがな</div>
                        <div className={styles.住所_ふりがな}>おおさかふ</div>
                        <div className={styles.枠名_住所}>現在地</div>
                        <div className={styles.郵便番号}>郵便番号xxx-xxxx</div>
                        <div className={styles.住所}>大阪府</div>
                    </div>

                    <div className={styles.tel}>
                        <div className={styles.枠名_電話番号}>電話番号</div>
                        <div className={styles.電話番号}>xxx-xxxx-xxxx</div>
                        <div className={styles.枠名_携帯電話}>携帯電話</div>
                        <div className={styles.携帯電話}>090-xxxx-xxxx</div>
                        <div className={styles.枠名_メール}>E-mail</div>
                        <div className={styles.メール}>xxxx@gmail.com</div>
                    </div>


                    <div className={styles.history}>
                        <div className={styles.枠名_年}>年</div>
                        <div className={styles.枠名_月}>月</div>
                        <div className={styles.枠名_学歴_職歴}>学歴・職歴</div>

                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>学歴</div>

                        <div className={styles.年}>平成20</div>
                        <div className={styles.月}>3</div>
                        <div className={styles.学歴_職歴}>xx中学校 卒業</div>
                        <div className={styles.年}>平成20</div>
                        <div className={styles.月}>4</div>
                        <div className={styles.学歴_職歴}>xx高等学校 入学</div>
                        <div className={styles.年}>平成23</div>
                        <div className={styles.月}>3</div>
                        <div className={styles.学歴_職歴}>xx高等学校 卒業</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>職歴</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>コンビニ 入社</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>コンビニ 退社</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>ラーメン屋 入社</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>ラーメン屋 退社</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>現職 入社</div>


                    </div>
                </div>

                <div className="migi">
                    <div className={styles.history}>
                        <div className={styles.枠名_年}>年</div>
                        <div className={styles.枠名_月}>月</div>
                        <div className={styles.枠名_学歴_職歴}>学歴・職歴</div>

                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>賞罰なし</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>以上</div>
                    </div>

                    <div className={styles.license}>
                        <div className={styles.枠名_年}>年</div>
                        <div className={styles.枠名_月}>月</div>
                        <div className={styles.枠名_免許_資格}>免許・資格</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>なし</div>
                        <div className={styles.年}></div>
                        <div className={styles.月}></div>
                        <div className={styles.学歴_職歴}>以上</div>
                    </div>


                    <div className={styles.hobby}>
                        <div className={styles.枠名_趣味_特技}>趣味・特技</div>
                        <div className={styles.趣味_特技}>aaaa</div>
                    </div>

                    <div className={styles.hope}>
                        <div className={styles.枠名_本人希望記入欄}>本人希望記入欄</div>
                        <div className={styles.本人希望記入欄}>あああああああｓｆさふぁ</div>
                    </div>
                </div>

            </div>

        </>
    );
}