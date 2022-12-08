import React, { useEffect } from "react";
import Job from "../JobSummaryCard"
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findExternalJobsThunk } from "../../../../services/jobs/jobs-thunks";

const JobList = () => {
    const jobs = useSelector(state => state.jobsData).externalJobs
    const isLoading = useSelector(state => state.jobsData).isLoading
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findExternalJobsThunk())
    }, [])

    return(
        <div className="container">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to={`/app/jobs/`} className="nav-link" aria-current="page">Internal Jobs</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/app/jobs/external`} className="nav-link active" aria-current="page">External Jobs</Link>
                </li>
            </ul>
            <div className="d-flex justify-content-between wd-search-area p-3">
                <input type="text" className="mx-3 form-control" id="keyword" placeholder="keyword"/>
                <input type="text" className="mx-3 form-control" id="location" placeholder="location"/>
                <button className="btn btn-outline-primary">Search</button>
            </div>
            <div className="d-flex wd-filter-selection p-3">
                <div className="wd-filter-field">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="border">
                <div className="grid-container">
                {jobs.map(job => 
                    <div className="grid-item">
                        <Job />
                    </div>)
                }
                </div>
            </div>
        </div>
        
    );
}

export default JobList;