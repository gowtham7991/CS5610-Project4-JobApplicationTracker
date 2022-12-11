import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import ProfileComponent from "./profile"
import ApplicationsComponent from "./applications"
import EditProfileComponent from "./edit-profile";
import { useSelector } from "react-redux";

const StudentApp = () => {
    const isLoggedIn = useSelector(state => state.loginData).isLoggedIn
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="profile/:uid" element={<ProfileComponent/>}/>
            <Route path="profile" element={<ProfileComponent/>}/>
            <Route path="edit-profile" element={<EditProfileComponent/>}/>
            <Route path="applications" element={<ApplicationsComponent/>}/>
        </Routes>
    );
}

export default StudentApp