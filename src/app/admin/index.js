import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"

const AdminApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
        </Routes>
    );
}

export default AdminApp