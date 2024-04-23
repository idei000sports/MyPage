import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>



      <div className="container-fluid bg01">

        <div className="container text-white content">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <a className="h1" href="/dajare">ダジャレ</a>
                </li>
                <li>
                  <a className="h1" href="/map">マップ」</a>
                </li>

                <li>
                  <a className="h1" href="/synth">synth</a>
                </li>
                <li>
                  <a className="h1" href="/test">test</a>
                </li>
              </ul>

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


      <div className="container-fluid bg02">

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





    </main>
  );
}
