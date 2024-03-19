import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./index_module/header"
import ScrollTop from './index_module/scrollTop';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dddiii",
  description: "aaaabbbb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
          {children}

          <ScrollTop />
          <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}
