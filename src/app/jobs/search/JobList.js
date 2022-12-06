import React from "react";
import Job from "./JobSummaryCard"
import "./JobList.css"

const JobList = () => {
    const jobs = ['1','2','3','4','5','6']
    return(
        <div className="grid-container">
            {jobs.map(job => 
                <div className="grid-item">
                    <Job />
                </div>)
            }
        </div>
    );
}

export default JobList;