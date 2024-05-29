
import Header from "./header/page"
import Footer from "./footer/page"
import ScrollTop from '../index_module/scrollTop';



export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

