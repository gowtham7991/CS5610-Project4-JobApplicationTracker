import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import NavBar from "../../navbar"


const Home = () => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className = "main-body container">
                <div className="row">
                    <div className="main-body-text-wrapper">
                        <h1 className="heading1 row">
                            Welcome
                        </h1>
                    </div>
                </div>
                <div className = "row">
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <Link to="/applications" style={{color:"black", textDecoration: 'none' }}>
                                        <div className="card-body">
                                            <div>
                                                <i className="fa-solid fa-list-check"></i>
                                            </div>
                                            <h5 className="card-title">Applications</h5>
                                            <p className="card-text" style={{color: "darkgray"}}>Look at the list of all jobs you have applied to so far.</p>
                                            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <Link to="/profile" style={{color:"black", textDecoration: 'none' }}>
                                        <div className="card-body">
                                            <div>
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                            <h5 className="card-title">Profile</h5>
                                            <p className="card-text" style={{color: "darkgray"}}>Showcase your academic and professional achievements.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <Link to="/" style={{color:"black", textDecoration: 'none' }}>
                                        <div className="card-body">
                                            <div>
                                                <i className="fa-solid fa-laptop"></i>
                                            </div>
                                            <h5 className="card-title">Search jobs</h5>
                                            <p className="card-text" style={{color: "darkgray"}}>Search for jobs and get personalized recommendations.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home