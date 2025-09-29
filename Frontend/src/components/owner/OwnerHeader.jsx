import React from 'react'
import { Link } from 'react-router-dom'
// import ShopDetails from './ShopDetails'
import { useNavigate } from "react-router-dom"

function OwnerHeader() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("profileData");  // owner data delete
        navigate("/ownerLogin");               // login page pe redirect
    };


    return (<>
        <nav className="navbar navbar-dark  fixed-top" style={{ backgroundColor: "#252d86ff" }} >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand mx-auto" to="#"><i className="fas fa-user-circle"></i> Medilocator</Link>
            </div>
        </nav>
         


        <div className="offcanvas offcanvas-start" style={{ backgroundColor: "#5b6097ff", width: "20%", marginTop: "50px" }} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel"><i className="fas fa-user"></i> Welcome, to your Profile!</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/"><i className="bi bi-house-door"></i>
                            Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/ownerEditProfile">
                            <i className="fas fa-user-edit"></i> Edit Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/allFeedbacks"><i className="fas fa-comments"></i> Feedback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/addShopDetails"><i className="fas fa-tasks"></i> Add Shops</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/myDetails"><i className="fas fa-tasks"></i> My Details</Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-light" onClick={handleLogout} >
                            <i className="fas fa-sign-out-alt"></i>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}



export default OwnerHeader