import React from "react";
import JobList from "./JobList"
import "./index.css"
import { Link } from "react-router-dom";

const JobSearch = () => {
    const jobs = ['1','2','3','4','5','6']
    return(
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/app/recruiter">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/app/jobs/search">Postings</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
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
                <JobList />
            </div>
        </div>
    );
}

export default JobSearch;