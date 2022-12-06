import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import tesla from "../../assets/teslabot.jpg"
import "./index.css"
import avatar from "../../assets/avatar.jpg"

const NavBar = () => {
    return (
        <div >
            <div className="d-flex justify-content-between wd-main-navbar bg-light shadow p-2">
                <div>
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="200" height="50" class="d-inline-block align-text-top"/>
                    </a>
                </div>
                <div className="d-flex">
                    <div className="d-flex">
                        <button className="btn btn-outline-secondary rounded-pill mx-2">Find Job</button>
                        <button className="btn btn-outline-secondary rounded-pill mx-2">Log in</button>
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



{/* <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
                <div className="">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="wd-logo-container p-2">
                            <img src={logo}/>
                        </div>

                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/login">
                            
                            Edit Profile
                        </Link>

                        <Link to="/login" >
                        Log Out
                        </Link>

                        <div >
                            <img
                                
                                src={tesla}
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                                style={{height: "100%", width: "100%"}}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div> */}