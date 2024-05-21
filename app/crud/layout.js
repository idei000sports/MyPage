import Navbar from "../crud/Navbar"


export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="col-md-6">
                        <main>{children}</main>
                    </div>
                </div>
            </div>


        </>
    )
}