import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import RegisterComponent from "./register"
import ProfileComponent from "./profile"
import ApplicationsComponent from "./applications"

const StudentApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<RegisterComponent/>}/>
            <Route path="profile" element={<ProfileComponent/>}/>
            <Route path="applications" element={<ApplicationsComponent/>}/>
        </Routes>
    );
}

export default StudentApp