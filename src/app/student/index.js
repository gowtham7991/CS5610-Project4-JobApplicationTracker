import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home"
import RegisterComponent from "./register"
import ProfileComponent from "./profile/view_mode"
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./profile/reducer/profile-reducer";

const store = configureStore({reducer: {profile: profileReducer}});
const StudentApp = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="register" element={<RegisterComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
            </Routes>
        </Provider>
    );
}

export default StudentApp