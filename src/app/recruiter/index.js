import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import RegisterComponent from "./register"
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../recruiter/profile/reducer/profile-reducer";
import { Provider } from "react-redux";
import RecruiterProfileComponent from "../recruiter/profile/index";

const store = configureStore({reducer: {user: profileReducer}});
const RecruiterApp = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="register" element={<RegisterComponent/>}/>
                <Route path="profile" element={<RecruiterProfileComponent/>}/>
            </Routes>
        </Provider>
    );
}

export default RecruiterApp