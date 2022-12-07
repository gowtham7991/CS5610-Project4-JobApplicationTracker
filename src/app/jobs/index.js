import React from "react";
import JobSearch from "./search";
import JobDetail from "./detail/JobDetail"
import { Route, Routes } from "react-router-dom";
import ApplicantsComponent from "./applicants"

const Jobs = () => {
    return(
        <Routes>
            <Route path="search/*" element={<JobSearch />}/>
            <Route path="detail/:jobId" element={<JobDetail />}/>
            <Route path=":jobId/applicants" element={<ApplicantsComponent />}/>
        </Routes>
    );
}

export default Jobs;