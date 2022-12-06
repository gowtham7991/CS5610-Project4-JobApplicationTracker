import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import logo from "../assets/logo.png"
import jobsImage from "../assets/jobs.png"
import "./index.css"

const App = () => {
    return (
        <div >
            <div className="d-flex justify-content-between wd-main-navbar bg-light shadow p-4">
                <div>
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="200" height="50" class="d-inline-block align-text-top"/>
                    </a>
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-secondary rounded-pill mx-2">Find Job</button>
                    <button className="btn btn-outline-secondary rounded-pill mx-2">Log in</button>
                    <button className="btn btn-primary rounded-pill mx-2">Sign up</button>
                </div>
            </div>
            <div className = "wd-main-content mt-5 mx-auto p-5 container">
                <div className = "d-flex">
                    <div className="">
                        <div className="candidate__hero-text-wrapper">
                            <h1 className="heading1">
                                Finding jobs has never been easier.
                            </h1>
                            <p>
                                JobFinder is a recruiting platform where candidates find jobs and get hired by the world's top tech companies.
                            </p>
                            <div className="d-flex">
                                <button className="btn btn-primary rounded-pill">Browse Jobs</button>
                                <button className="btn btn-outline-secondary rounded-pill border mx-3">Hire Talent</button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6 col-m-12">
                        <img src={jobsImage}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App

