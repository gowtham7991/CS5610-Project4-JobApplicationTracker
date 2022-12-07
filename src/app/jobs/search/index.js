import React from "react";
import ExternalJobList from "./ExternalJobs"
import InternalJobList from "./InternalJobs"
import "./index.css"
import { Route, Routes } from "react-router-dom";

const JobSearch = () => {    
    return(
        <Routes>
            <Route path="" element={<InternalJobList />}/>
            <Route path="external" element={<ExternalJobList />}/>
        </Routes>
    );
}

export default JobSearch;




