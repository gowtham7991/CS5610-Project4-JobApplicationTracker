import React, { useEffect } from "react";
import ApplicantItem from "./ApplicantItem"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findApplicationsByJobIdThunk } from "../../../services/applications/applications-thunk";

const ApplicationList = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const applications = useSelector(state => state.applicationsData).applications
    const jobId = params.jobId;
    console.log(jobId)
    useEffect(() => {
        dispatch(findApplicationsByJobIdThunk(jobId))
    }, [])

    return(
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/recruiter">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/postings/">Postings</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            <ul className="list-group">
            {
                applications.map(application => 
                    <ApplicantItem key={application._id} data={application}/>
                    )
            }
        </ul>
        </div>
    );
}

export default ApplicationList