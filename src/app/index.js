import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import StudentComponent from "./student"
import RecruiterComponent from "./recruiter"
import AdminComponent from "./admin"
import JobsComponent from "./jobs"
import PostingsComponent from "./postings"
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

const App = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const navigate = useNavigate()

    return(
        <div>
            <NavBar/>
            <div className="m-2">
                <Routes>
                    <Route path="student/*" element={<StudentComponent/>}/>
                    <Route path="admin/*" element={<AdminComponent/>}/>
                    <Route path="recruiter/*" element={<RecruiterComponent/>}/>
                    <Route path="jobs/*" element={<JobsComponent/>}/>
                    <Route path="postings/*" element={<PostingsComponent/>}/>
                </Routes>
            </div>
            
        </div>
    );
}

export default App