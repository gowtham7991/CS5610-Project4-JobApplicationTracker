import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import tesla from "../../assets/teslabot.jpg"


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="wd-logo-container p-2">
                            <img src={logo}/>
                        </div>

                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/login">
                            <button type="button" className="btn btn-outline-secondary font-style rounded-pill">
                                Edit Profile
                            </button>
                        </Link>

                        <Link to="/login" >
                            <button className="btn btn-outline-secondary font-style rounded-pill">
                                Log Out
                            </button>
                        </Link>

                        <div >
                            <img
                                src={tesla}
                                height="50"
                                width= "50"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                                style={{borderRadius :'50%'}}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar