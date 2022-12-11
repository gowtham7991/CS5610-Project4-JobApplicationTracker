import React, { useState } from "react";
import Job from "./JobSummaryCard"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { findInternalJobsThunk } from "../../../../services/jobs/jobs-thunks";
import { useEffect } from "react";

const JobList = () => {
    const [company, setCompany] = useState('All')
    const [term, setTerm] = useState('All')
    const [paymentType, setPaymentType] = useState('All')

    const userDetails = useSelector(state => state.loginData).userDetails
    const jobs = useSelector(state => state.jobsData).internalJobs
    const isLoading = useSelector(state => state.jobsData).isInternalJobListLoading
    const dispatch = useDispatch();
    
    useEffect(() => {
        const params = {}
        if(company !== "All") {
            params.company = company
        }
        if(term !== "All") {
            params.term = term
        }
        if(paymentType !== "All") {
            params.paymentType = paymentType
        }
        dispatch(findInternalJobsThunk(params))
    }, [])
    
    const searchClickHandler = () => {
        const params = {}

        if(company !== "All") {
            params.company = company
        }
        if(term !== "All") {
            params.term = term
        }
        if(paymentType !== "All") {
            params.paymentType = paymentType
        }

        dispatch(findInternalJobsThunk(params));
    }

    return(
        <div className="container">
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
                    <Link to="" className="nav-link active" aria-current="page">Internal Jobs</Link>
                </li>
                <li class="nav-item">
                    <Link to="external" className="nav-link">External Jobs</Link>
                </li>
            </ul>
            <div className="d-flex justify-content-between wd-search-area p-3">
                <input type="text" className="mx-3 form-control" id="keyword" placeholder="keyword"/>
                <input type="text" className="mx-3 form-control" id="location" placeholder="location"/>
                <button className="btn btn-outline-primary" onClick={searchClickHandler}>Search</button>
            </div>
            <div className="d-flex wd-filter-selection p-3">
                <div className="wd-filter-field">
                    <label htmlFor="company">Company</label>
                    <select name="company" id="company" class="form-select form-select-sm" aria-label=".form-select-sm example" 
                        value={company} onChange={e => setCompany(e.target.value)}>
                        <option selected>choose company</option>
                        <option value="All">All</option>
                        <option value="Google">Google</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Meta">Meta</option>
                        <option value="Netflix">Netflix</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Apple">Apple</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <label htmlFor="company">Company</label>
                    <select name="term" id="term" class="form-select form-select-sm" aria-label=".form-select-sm example" value={term} 
                        onChange={e => setTerm(e.target.value)}>
                        <option selected>choose term</option>
                        <option value="All">All</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>
                <div className="wd-filter-field">
                    <label htmlFor="payment">Payment Type</label>
                    <select name="payment" id="payment" class="form-select form-select-sm" aria-label=".form-select-sm example" value={paymentType} 
                        onChange={e => setPaymentType(e.target.value)}>
                        <option selected>choose payment type</option>
                        <option value="All">All</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Biweekly">Biweekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>
            </div>
           {
            !isLoading &&
            <div>
                
            <div className="border">
                <div className="grid-container">
                {jobs.map(job => 
                    <div className="grid-item">
                        <Job data={job}/>
                    </div>)
                }
                </div>
            </div>
            </div>
           }
        </div>
        
    );
}

export default JobList;