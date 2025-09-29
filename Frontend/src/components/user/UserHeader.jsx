import React from 'react'
import { Link } from 'react-router-dom'
function UserHeader() {





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
                <h5 className="offcanvas-title" id="sidebarMenuLabel"><i className="fas fa-user"></i> Welcome, User!</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#"><i className="bi bi-house-door"></i>
                            Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/userEditProfile">
                            <i className="fas fa-user-edit"></i> Edit Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="#"><i className="fas fa-comments"></i> Feedback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/viewDetails"><i className="fas fa-comments"></i> ViewDetails</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/searchShop"><i className="fas fa-tasks"></i> Search Shops</Link>
                    </li>
                    <li className="nav-item">
                        {/* <button type="button" className="btn btn-light" > */}
                        <Link className="nav-link text-white" to="/addShopDetails"> 
                            <i className="fas fa-sign-out-alt"></i>
                        
                        
                             LogOut</Link>
                            
                        {/* </button> */}
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}



export default UserHeader