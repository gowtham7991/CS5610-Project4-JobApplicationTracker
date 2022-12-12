import React, { useEffect, useState } from "react";
import Job from "./ExternalJobSummaryCard"
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findExternalJobsThunk } from "../../../../services/jobs/jobs-thunks";

const JobList = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [country, setCountry] = useState('US');
    const [sort_by, setSortBy] = useState('date');
    const jobs = useSelector(state => state.jobsData.externalJobs)
    const isLoading = useSelector(state => state.jobsData).isExternalJobListLoading
    const dispatch = useDispatch();
    
    const searchClickHandler = () => {
        const params = {
            keyword: keyword,
            location: location,
            country: country,
            sort_by: sort_by
        }
        dispatch(findExternalJobsThunk(params));
    }
    useEffect(() => {
        const params = {
            keyword: keyword,
            location: location,
            country: country,
            sort_by: sort_by
        }
        dispatch(findExternalJobsThunk(params))
    }, [])

    return(
        <div className="wd-external-jobs container p-3">
            <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to={`/app/${userDetails.role.toLowerCase()}`}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Jobs</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to={`/app/jobs/`} className="nav-link" aria-current="page">Internal Jobs</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/app/jobs/external`} className="nav-link active" aria-current="page">External Jobs</Link>
                </li>
            </ul>
            <div className="d-flex justify-content-between wd-search-area p-3">
                <input type="text" className="mx-3 form-control" id="keyword" placeholder="keyword" onChange={(e) => setKeyword(e.target.value)}/>
                <input type="text" className="mx-3 form-control" id="location" placeholder="location" onChange={(e) => setLocation(e.target.value)}/>
                <button className="btn btn-outline-primary" onClick={searchClickHandler}>Search</button>
            </div>
            <div className="d-flex wd-filter-selection p-3">
                <div className="wd-filter-field">
                    <label htmlFor="country">Country</label>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="country" id="country" onChange={(e)=>setCountry(e.target.value)}>
                        <option value="us" selected>US</option>
                        <option value="gb">GB</option>
                        <option value="fr">FR</option>
                        <option value="in">IN</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <label htmlFor="sort_by">Sort by</label>
                    <select name="sort_by" id="sort_by" class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e)=>setSortBy(e.target.value)}>
                        <option value="date" selected>Date</option>
                        <option value="salary">Salary</option>
                    </select>
                </div>
            </div>
            {
                !isLoading && 
                <div>
                    
            
            {jobs && <div className="">
                <div className="row m-0">
                    {jobs.length > 0 && jobs.map(job =>
                        <div className="col-lg-4 col-sm-12 p-2">
                            <Job job = {job}/>
                        </div>)
                    }
                    {
                        jobs.length === 0 && <p>No jobs found</p>
                    }
                </div>
            </div>}
                </div>
            }
        </div>
        
    );
}

export default JobList;