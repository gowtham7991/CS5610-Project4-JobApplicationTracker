import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./index.css"
const App = () => {
    return (
        <div >
            <div className ="navbar big"  >
                <div className="container navbar-container">
                    <div >
                        <Link to="/" style={{color: 'black', textDecoration: 'none'}}>logo image here</Link>
                    </div>
                    <div className = "big-nav-menu-wrapper" data-easing="ease" >
                        <div className = "container navbar-container mobile ">
                            <div className = "nav-cta-btn font-style">
                                <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Log In</Link>
                            </div>
                            <div className="nav-cta-btn " >
                                <Link to="/student/register" style={{ color: 'black', textDecoration: 'none' }}>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "main">
                <div className = "candidate__hero wf-section">
                    <div className = "container wide-container">
                        <div className = "row">
                            <div className="col col-6 col-m-12">
                                <div className="candidate__hero-text-wrapper">
                                    <h1 className="heading1">
                                        Finding jobs has never been easier.
                                    </h1>
                                    <p className="para1">
                                        APPNAME is a recruiting platform where candidates find jobs and get hired by the world's top tech companies.
                                    </p>
                                    <div className="w-layout-grid duo-btns">
                                        <div className = "nav-cta-btn ">
                                            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Browse Jobs</Link>
                                        </div>
                                        <div className="nav-cta-btn " >
                                            <Link to="/student/register" style={{ color: 'black', textDecoration: 'none' }}>Hire Talent</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-6 col-m-12">
                                Image here
                                <img src=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App