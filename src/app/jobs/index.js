import React from "react";
import JobSearch from "./search";
import JobDetail from "./detail/JobDetail"
import { Route, Routes } from "react-router-dom";

const Jobs = () => {
    return(
        <Routes>
            <Route path="/*" element={<JobSearch />}/>
            <Route path="detail/:jobId" element={<JobDetail />}/>
        </Routes>
    );
}

export default Jobs;