import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {


  return (
    <main>

      <div className="container-fluid">

        <div className={styles.top_background} style={{ backgroundImage: 'url(/illust/fefe.jpg)' }}>

          <div className={styles.background_image} style={{ backgroundImage: 'url(/illust/dok.png)', paddingTop: "10em" }}>
          <div className={styles.top}>
            <div className={styles.top_title}>
              <h1>出射サイト</h1>
              <p>サイウエオオアｋｋゲ</p>
            </div>
          </div>
        </div>
        </div>
      </div>



      <div className="cointainer-fluid">



        <div className="row">
          <div className={styles.content_row}>
            <div className="col">

              <div className={styles.background_image} style={{ backgroundImage: 'url(/illust/fefe.jpg)' }}>
                <div className={styles.top_text}>
                  <h1>人生人生</h1>
                  <p>人生人生人生人生</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`row ${styles.content_row}`}>

          <div className="col">
            <h1>
              人生
            </h1>
            <p>
              超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生超人生
            </p>
          </div>
          <div className="col">
            <img src="/illust/jiji.jpg" style={{ width: '100%' }}>
            </img>
          </div>
        </div>


        <div className={`row ${styles.content_row}`}>

          <div className="col">
            <img src="/top/me_ver2.jpg" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <img src="/top/me_ver2.jpg" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <img src="/top/me_ver2.jpg" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <img src="/top/me_ver2.jpg" style={{ width: '100%' }} />
          </div>
        </div>



        <div className="container-fluid" style={{ backgroundColor: "#333" }}>
          <div className={`row ${styles.content_row}`}>
            <div className="col">
              <div className="col">
                <img src="/top/me_ver2.jpg" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="col">
              <h2>テストテスト</h2>
              <p>パピプエペ</p>

              <h2>テストテスト</h2>
              <p>パピプエペ</p>

              <h2>テストテスト</h2>
              <p>パピプエペ</p>

            </div>
          </div>

          <div className={`row ${styles.content_row}`}>
            <div className="col">empty</div>
            <div className="col">
              <div className={styles.card}>
                <i className="bi bi-0-circle"></i>
                <h3>はおおお</h3>
                <p>テスト</p>
              </div>

            </div>
            <div className="col">
              <div className={styles.card}>
                <i className="bi bi-0-circle"></i>
                <h3>はおおお</h3>
                <p>テスト</p>
              </div>
            </div>
            <div className="col">
              <div className={styles.card}>
                <i className="bi bi-0-circle"></i>
                <h3>はおおお</h3>
                <p>テスト</p>
              </div>
            </div>
            <div className="col">
              <div className={styles.card}>
                <i className="bi bi-0-circle"></i>
                <h3>はおおお</h3>
                <p>テスト</p>
              </div>
            </div>
            <div className="col">empty</div>
          </div>

          <div className={`row ${styles.content_row}`}>
            アイウエオ
          </div>


        </div>





      </div>










    </main>
  );
}


/*


      <div className={`container-fluid ${styles.bg03}`}>

        <div className="container text-white content">
          <div className="row">
            <div className="col">

            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>te</h2>
              <h2>tる</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid bg04">

        <div className="container text-white content">
          <div className="row">
            <div className="col">
              <h1>なさい</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>s</h2>
              <h2>s</h2>
            </div>
          </div>
        </div>
      </div>


*/