import React from "react";
import PostingList from "./search"
import ApplicantList from "./applicants"
import { Route, Routes } from "react-router-dom";
const Postings = () => {
    return(
        <Routes>
            <Route path="" element={<PostingList />}/>
            <Route path="company/:companyId" element={<PostingList />}/>
            <Route path="job/:jobId/applicants" element={<ApplicantList />}/>
        </Routes>
    );
}

export default Postings