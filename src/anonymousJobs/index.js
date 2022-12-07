import React from "react";
import JobSearch from "../app/jobs/search";
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";


const AnonymousJobsList = () => {
    let navigate = useNavigate();
    const signUpHandler = () => {
        navigate('/register/student')
    }

    return(
        <div>
            <div className="d-flex justify-content-between wd-main-navbar bg-light shadow p-4">
                <div>
                    <div>
                        <Link to="/">
                            <img src={logo} alt="" width="200" height="50" class="d-inline-block align-text-top"/>
                        </Link>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-flex align-items-center wd-login-link"><Link to="/login">Log in</Link></div>
                    <button className="btn btn-primary rounded-pill mx-5" onClick={signUpHandler}>Sign up</button>
                </div>
            </div>
            <JobSearch />
        </div>
    );
}

export default AnonymousJobsList