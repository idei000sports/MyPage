
import Footer from "./footer"
import Header from "./header";
import style from "./style.css"

export default function RootLayout({ children }) {
    return (
        <>
            <div>
                <Header />

                {children}
                <Footer />
            </div>
        </>
    );
}