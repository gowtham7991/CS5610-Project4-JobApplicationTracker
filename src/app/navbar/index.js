import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./index.css"

const NavBar = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const userRole = userDetails.role
    const isUserLoggedIn = true;
    
    return (
        <div >
            <div className="wd-navbar">
            {/*<div className="d-flex justify-content-between wd-main-navbar bg-light shadow p-2">*/}
                <div>
                    <Link to={`/app/${userRole.toLowerCase()}`}>
                        <img src={logo} alt="" width="200" height="50" class="wd-navlogo"/>
                    </Link>
                </div>
                <div className="d-flex">
                    <div className="d-flex">
                        <button className="btn btn-outline-secondary rounded-pill mx-2">{isUserLoggedIn ? "Log out" : "Log in"}</button>
                    </div>
                    <div className="wd-avatar-container d-flex align-items-center justify-content-center">
                        <i class="wd-avatar fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default NavBar