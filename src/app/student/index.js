import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import RegisterComponent from "./register"

const StudentApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<RegisterComponent/>}/>
        </Routes>
    );
}

export default StudentApp