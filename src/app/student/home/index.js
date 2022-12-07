import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import NavBar from "../../navbar"
import carousel from "../../../assets/grads.jpg"

const Home = () => {
    const uid = 1111;

    return (
        <div>
            <div className="wd-content container">

                <div className="py-4">
                    <img src={carousel} className="w-100" id="carousel"/>
                </div>
                <div className="wd-cards-section row m-0">
                    <div className="col card h-100 rounded border me-3">
                        <div className="card-body">
                            <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <h5 className="card-title">Job Search</h5>
                            <p className="card-text text-muted">Search for jobs and get personalized recommendations</p>
                            <Link to="/app/jobs/search">view jobs</Link>
                        </div>
                    </div>
                    <div className="col card h-100 rounded border me-3">
                        <div className="card-body">
                            <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                            </div>
                            <h5 className="card-title">Applications</h5>
                            <p className="card-text text-muted">Look at the list of all jobs you have applied to so far</p>
                            <Link to="applications">view applications</Link>
                        </div>
                    </div>
                    <div className="col card h-100 rounded border">
                        <div className="card-body">
                            <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <h5 className="card-title">Public Profile</h5>
                            <p className="card-text text-muted">View for profile to add personal details to improve your chance of getting a job</p>
                            <Link to={`profile/${uid}`}>view profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home