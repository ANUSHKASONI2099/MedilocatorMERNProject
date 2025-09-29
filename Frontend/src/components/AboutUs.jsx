import { Link } from "react-router-dom"
import "../css/contactus.css"

function AboutUs() {
    return (
        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <img src="/favicon.png" alt="" style={{ width: "70px", height: "50px", borderRadius: "50%" }} />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">AboutUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">ContactUs</Link>
                            </li> <li className="nav-item">
                                <Link className="nav-link" to="/findshop"> <i class="fa-solid fa-location-dot"></i>   Find Shop</Link>
                            </li>


                        </ul>

                    </div>
                </div>


            </nav>


            <div className="scroll-text-container">
                <div className="scroll-text">
                    Welcome to MediLocator – Your trusted medical store locator! 💊🩺 Find medicines and health services near you in seconds
                    | 💊 Locate trusted medical stores near you | 🆘 Emergency contacts now available on MediLocator

                </div>
            </div>

            <footer className="footer  text-white py-3" style={{ marginTop: "36%" }}>
                <div className="container text-center">
                    <p className="mb-1">  <i className="fa-regular fa-copyright"></i> Facilitates. All rights reserved.</p>
                    <p className="mb-0">Contact: support@facilitates.com | Phone: +91-1234567890</p>
                </div>
            </footer>



        </>
    )
}
export default AboutUs




