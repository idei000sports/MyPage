

import Image from 'next/image'
import Link from "next/link"

export default function Main() {

    return (
        <>
            <main>
                <div className="profile">
                    <div className="profile_text">
                        <h5 className="profile_h5">チャンピオンシップロードランナー</h5>
                        <h2 className="privacy">出射 拓馬</h2>
                        <h5 className="profile_h5 privacy">Idei Takuma</h5>
                        <p>
                            1992-
                        </p>
                        <p className="privacy">大阪府</p>
                    </div>
                    <div className="profile_image">
                        <Image src="/top/me_ver2.jpg" layout="fill" objectFit="cover" />
                    </div>
                </div>

                <div>
                    <h2 className="title"><span className="content">Contents</span></h2>

                    <dl>
                        <dt>
                            <Link href="/portfolio/about">
                                About
                            </Link>
                        </dt>
                        <dd>私について</dd>


                        <dt>
                            <Link href="/dajare">ダジャレ作成機</Link>
                        </dt>
                        <dd>単語を入力すると母音が一致する単語をリストアップする</dd>

                        <dt>
                            <Link href="/map">地図</Link>
                        </dt>
                        <dd>アメリカのバンドの出身地マップ</dd>

                    </dl>
                </div>

                <div>
                    <h2 className="title"><span className="content">Contents</span></h2>
                    <ul>
                        <li className="content_list">7600000000年XX月XX日 地球崩壊</li>
                        <li className="content_list">aaaa</li>
                        <li className="content_list">aaaa</li>
                    </ul>
                </div>
            </main>
        </>
    );
}