import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import NavBar from "../../navbar"
import carousel from "../../../assets/student.png"
import { useSelector } from "react-redux";

const Home = () => {
    const userDetails = useSelector(state => state.loginData).userDetails

    return (
        <div>
            <div className="wd-content container">
                <div style={{height: "90vh"}}>
                    <h3>{`Welcome, ${userDetails.name.firstName} ${userDetails.name.lastName}!`}</h3>
                    <div className="py-4">
                        <img src={carousel} className="w-100" id="carousel"/>
                    </div>
                    <div className="wd-cards-section row m-0">
                        <div className="col card h-100 rounded border me-3">
                            <div className="card-body">
                                <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </div>
                                <h5 className="card-title">Job Search</h5>
                                <p className="card-text">Search for jobs and get personalized recommendations</p>
                                <Link to="/app/jobs/">view jobs</Link>
                            </div>
                        </div>
                        <div className="col card h-100 rounded border me-3">
                            <div className="card-body">
                                <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                </div>
                                <h5 className="card-title">Applications</h5>
                                <p className="card-text">Look at the list of all jobs you have applied to so far</p>
                                <Link to="applications">view applications</Link>
                            </div>
                        </div>
                        <div className="col card h-100 rounded border">
                            <div className="card-body">
                                <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                                <h5 className="card-title">Public Profile</h5>
                                <p className="card-text">View for profile to add personal details to improve your chance of getting a job</p>
                                <Link to={`profile/`}>view profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="h3 text-center">Connect with other students</p>
                <div className="row m-0">
                    <div className="col-4 p-2">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-2">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div><div className="col-4 p-2">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home