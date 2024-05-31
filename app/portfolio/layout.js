
import Navbar from "./navbar"
import Footer from "./footer"
import style from "./style.css"

export default function RootLayout({ children }) {
    return (
        <>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}