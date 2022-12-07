import React from "react";
import { useParams } from "react-router-dom";
import "./JobDetail.css"
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";

const JobDetail = () => {
    const urlParams = useParams();
    const jobId = urlParams.jobId;

    return(
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/recruiter">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/search">Postings</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            <div className="wd-jobdetail-container">
            <div className="d-flex wd-job-header border p-3">
                <div className="col-1 wd-company-logo">
                    <img src={logo}/>
                </div>
                <div className="col-10 wd-section-header">
                    <h1>Accounting Methods and Periods Tax Associate - Fall 2022</h1>
                    <div className="text-muted">Company Name</div>
                    <div className="text-muted">Job Type</div>
                </div>
                <div className="col-1 wd-apply-section">
                    <div>
                        <button className="btn btn-primary btn-sm rounded-pill">Apply</button>
                    </div>
                </div>
            </div>
            <div className="wd-job-details border p-3">
                <div className="wd-job-summary border-bottom">
                    <div>
                        <p className="h6">Position Type</p>
                        <p className="h6 text-muted">Co-op</p>
                    </div>
                    <div className="mt-3">
                        <p className="h6">Number of openings</p>
                        <p className="h6 text-muted">1</p>
                    </div>
                </div>
                <div className="wd-job-description border-bottom mt-2">
                    <div className="wd-job-description-text">
                        <p className="h6">Description</p>
                        <p className="h6 text-muted">
                            Hometap has an ambitious mission to make homeownership less stressful and more accessible.  
                            Our vision is to make the idea of bringing on an investor for your home as ubiquitous as borrowing to finance a home is today. 
                            We also aspire to build a long lasting durable financial-technology company that becomes a hallmark of the Boston economy. 
                        </p>
                    </div>
                    <div className="wd-job-desired-skill">
                        <p className="h6">Desired Skills</p>
                        <div className="row my-2">
                            <span class="col-2 badge rounded-pill bg-light text-dark border mx-2">Python</span>
                            <span class="col-2 badge rounded-pill bg-light text-dark border mx-2">Java</span>
                            <span class="col-2 badge rounded-pill bg-light text-dark border mx-2">C++</span>
                            <span class="col-2 badge rounded-pill bg-light text-dark border mx-2">AWS</span>
                            <span class="col-2 badge rounded-pill bg-light text-dark border mx-2">Linux</span>
                        </div>
                    </div>
                </div>
                <div className="wd-job-field border-bottom mt-2">
                    <div>
                        <p className="h6">Job Number</p>
                        <p className="h6 text-muted">2345</p>
                    </div>
                    <div className="mt-3">
                        <p className="h6">Location</p>
                        <p className="h6 text-muted">Boston, Massachussets</p>
                    </div>
                    <div className="mt-3">
                        <p className="h6">Payment Type</p>
                        <p className="h6 text-muted">Hourly $35-$42</p>
                    </div>
                    <div className="mt-3">
                        <p className="h6">Job Duration</p>
                        <p className="h6 text-muted">6 month</p>
                    </div>
                </div>
            </div>
            <div className="wd-job-sidebar-content border p-3">
                <div className="wd-sidebar-inner border-bottom">
                    <div className="wd-sidebar-header"><p className="h6"><b>Important Dates</b></p></div>
                    <div className="wd-sidebar-body">
                        <div>
                            <p className="h6 text-muted">Posted on: </p>
                            <p className="h6 text-muted">Dec 04, 2022</p>
                        </div>
                        <div>
                            <p className="h6 text-muted">Application Deadline: </p>
                            <p className="h6 text-muted">Jan 10, 2023</p>
                        </div>
                    </div>
                </div>


                <div className="wd-sidebar-inner border-bottom mt-2">
                    <div className="wd-sidebar-header"><p className="h6"><b>Recruiter Details</b></p></div>
                    <div className="wd-sidebar-body">
                        <div>
                            <p className="h6 text-muted">Name: </p>
                            <p className="h6 text-muted">John Doe</p>
                        </div>
                        <div>
                            <p className="h6 text-muted">Role: </p>
                            <p className="h6 text-muted">University Recruiter</p>
                        </div>
                        <div>
                            <a href ="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i> visit profile</a>
                        </div>
                    </div>
                </div>

                <div className="wd-sidebar-inner border-bottom mt-2">
                    <div className="wd-sidebar-header"><p className="h6"><b>Follow us on</b></p></div>
                    <div className="wd-sidebar-body">
                        <div>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                        </div>
                        <div>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                        </div>
                        <div>
                            <a href ="#"><i class="fa fa-link" aria-hidden="true"></i> Company website</a>
                        </div>
                    </div>
                </div>

                <div className="wd-sidebar-inner border-bottom mt-2">
                    <div className="wd-sidebar-header"><p className="h6"><b>Help and Support</b></p></div>
                    <div className="wd-sidebar-body">
                        <div>
                            <a href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i> Send a question or comment</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default JobDetail