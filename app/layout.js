import Script from 'next/script'
import { Noto_Sans_JP } from 'next/font/google'
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./header/page"
import Footer from "./footer/page"
import ScrollTop from './index_module/scrollTop';


const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "dddiii",
  description: "aaaabbbb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notojp.className}>
        <Header />
        <div style={{paddingTop: "4em"}}>
        {children}
        </div>
        <Footer />
        <ScrollTop />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>

      </body>
    </html>
  );
}

/* <Header /> */