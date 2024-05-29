import Image from 'next/image'
export default function Main() {

    return (
        <>
            <main>
                <div className="profile">
                    <div className="profile_text">
                        <h5 className="profile_h5">肩書</h5>
                        <h2>出射 拓馬</h2>
                        <h5 className="profile_h5">Idei Takuma</h5>
                    </div>
                    <div className="profile_image">
                        <Image src="/top/me_ver2.jpg" layout="fill" objectFit="cover" />
                    </div>
                </div>

                <div>
                    <h2 className="title">main</h2>
                    <dl>
                        <dt><a href="/dajare">ダジャレ作成機</a></dt>
                        <dd>単語を入力すると母音が一致する単語をリストアップする</dd>

                        <dt><a href="/map">地図</a></dt>
                        <dd>アメリカのバンドの出身地マップ</dd>

                        <dt><a href="/home/infomation">お問い合わせ</a></dt>
                        <dd>連絡先未入力</dd>
                    </dl>

                </div>

                <div>
                    <h2 className="title">content2</h2>
                    <ul>
                        <li className="content_list">aaaa</li>
                        <li className="content_list">aaaa</li>
                        <li className="content_list">aaaa</li>
                    </ul>
                </div>
            </main>
        </>
    );
}