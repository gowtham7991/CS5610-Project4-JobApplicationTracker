import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import RegisterComponent from "./register"
import PostingForm from "./posting";

const RecruiterApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="register" element={<RegisterComponent/>}/>
            <Route path="job/create" element={<PostingForm/>}/>
        </Routes>
    );
}

export default RecruiterApp