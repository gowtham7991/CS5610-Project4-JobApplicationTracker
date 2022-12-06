import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import tesla from "../../../assets/teslabot.jpg"

const Home = () => {
    return (
        <div>
            <div className="wd-content container">
                <div className="py-4">
                    <img src={tesla} className="w-100" id="carousel"/>
                </div>
                <div className="wd-cards-section row m-0">
                    <div className="col card h-100 rounded border me-3">
                        <div className="card-body">
                            <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                            </div>
                            <h5 className="card-title">Post a job</h5>
                            <p className="card-text text-muted">A new job for a new role can be created and students can apply</p>
                            <Link to="job/create">Create a job</Link>
                        </div>
                    </div>
                    <div className="col card h-100 rounded border me-3">
                        <div className="card-body">
                            <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                            <h5 className="card-title">Check all postings</h5>
                            <p className="card-text text-muted">All the postings you have created so far to view all the applicants</p>
                            <Link to="/jobs/search">view positing</Link>
                        </div>
                    </div>
                    <div className="col card h-100 rounded border">
                        <div className="card-body">
                            <div className="wd-icon-container d-flex justify-content-center p-2 rounded-pill">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </div>
                            <h5 className="card-title">Public Profile</h5>
                            <p className="card-text text-muted">View for profile to add personal details to improve your chance of getting a job</p>
                            <Link to="/recruiter/profile">view profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home