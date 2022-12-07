import React from "react";
import ApplicantItem from "./ApplicantItem"
import { Link } from "react-router-dom";

const ApplicationList = () => {
    const applicants = [{"_id":1, "av":"aaa"}, {"_id":2, "av":"bbb"}];
    return(
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/recruiter">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/">Postings</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            <ul className="list-group">
            {
                applicants.map(application => 
                    <ApplicantItem key={application._id} data={application}/>
                    )
            }
        </ul>
        </div>
    );
}

export default ApplicationList