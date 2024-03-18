import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col text-center">
                        <h1 className="text-white ">ASSHOLE</h1>
                    </div>
                    <div className="col text-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i class="h1 text-white bi bi-list"></i>
                    </button>
                    </div>
                </div>
                
            </div>

            <nav className="navbar fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#"></a>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ASSHOLE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li>けつ</li>
                                <li>けつ</li>
                                <li>けつ</li>
                                <li>けつ</li>
                                <li>けつ</li>
                                <li>けつ</li>
                                <li>けつ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
}