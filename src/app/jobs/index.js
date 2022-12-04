import React from "react";
import JobSearch from "./JobSearch";
import JobDetail from "./JobDetail"
import "./index.css"
import { Route, Routes } from "react-router-dom";

const Jobs = () => {
    const jobs = ['1','2','3','4','5','6']
    return(
        <Routes>
            <Route path="search" element={<JobSearch />}/>
            <Route path="detail/:jobId" element={<JobDetail />}/>
        </Routes>
    );
}

export default Jobs;