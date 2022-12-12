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

                <div className="row">
                    <h3 >{`Welcome, ${userDetails.name.firstName} ${userDetails.name.lastName}!`}</h3>

                    <div className="col-lg-8">
                        <div >
                        <div className="py-4">
                            <img src={carousel} className="w-100" id="carousel"/>
                        </div>
                        <div className="wd-cards-section row m-0">
                            <div className="col-lg-4 col-sm-12 p-2">
                                <div className="card rounded border me-3">
                                    <div className="card-body">
                                        <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                        <h5 className="card-title">Job Search</h5>
                                        <p className="card-text">Search for jobs and get personalized recommendations and apply to the best jobs</p>
                                        <Link to="/app/jobs/">view jobs</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 p-2">
                                <div className="card rounded border me-3">
                                    <div className="card-body">
                                        <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                        </div>
                                        <h5 className="card-title">Applications</h5>
                                        <p className="card-text">Look at the list of all jobs you have applied to so far and view the details</p>
                                        <Link to="applications">view applications</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 p-2">
                                <div className="card rounded border">
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
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <p className="h3 text-center">Connect with other students</p>
                    <div className="row m-0">
                        <div className="col-12 p-2">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Jane Smith</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Computer Science</h6>
                                    <p className="card-text">I am pursuing MSCS at Northeastern University, Boston</p>
                                    <a href="http://localhost:3000/app/student/profile/63967c29273c3e77ce5461e3" className="card-link" target="_blank">view profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Riya Batra</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Data Science</h6>
                                    <p className="card-text">I am pursuing Data Science at Northeastern University, Boston</p>
                                    <a href="http://localhost:3000/app/student/profile/6394c18d273c3e77cebf9a08" className="card-link" target="_blank">view profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Abhisha Daine</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Artifical Intelligence</h6>
                                    <p className="card-text">I am pursuing MSAI at Northeastern University, Boston</p>
                                    <a href="http://localhost:3000/app/student/profile/6394c1ec273c3e77cec09fcd" className="card-link" target="_blank">view profile</a>
                                </div>
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