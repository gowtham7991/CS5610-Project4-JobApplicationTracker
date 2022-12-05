import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import RegisterComponent from "./register"
import ProfileComponent from "./profile"

const StudentApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<RegisterComponent/>}/>
            <Route path="profile" element={<ProfileComponent/>}/>
        </Routes>
    );
}

export default StudentApp