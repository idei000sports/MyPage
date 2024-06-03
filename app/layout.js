import Script from 'next/script'
import { Noto_Sans_JP } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

//bootstrapより後に呼び出す
import "./globals.css";

import ScrollTop from "./index_module/scrollTop";


const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "出射ホームページ",
  description: "出射のホームページ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notojp.className} style={{  backgroundColor: "#F8F8F8"}}>
          {children}
          <ScrollTop />
      </body>
    </html>
  );
}

/* <Header /> */

/*
  いる？
  <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>

*/