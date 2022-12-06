import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar";
import StudentComponent from "./student"
import RecruiterComponent from "./recruiter"
import AdminComponent from "./admin"
import JobsComponent from "./jobs"

const App = () => {
    return(
        <div>
            <NavBar/>
            <div className="m-2">
                <Routes>
                    <Route path="student/*" element={<StudentComponent/>}/>
                    <Route path="admin/*" element={<AdminComponent/>}/>
                    <Route path="recruiter/*" element={<RecruiterComponent/>}/>
                    <Route path="jobs/*" element={<JobsComponent/>}/>
                </Routes>
            </div>
            
        </div>
    );
}

export default App