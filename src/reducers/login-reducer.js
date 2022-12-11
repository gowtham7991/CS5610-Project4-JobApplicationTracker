import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/login/login-thunks";

const initialState = {
    userDetails: {
        companyId: "",
        email: "",
        password: "",
        name: {firstName: "", lastName: ""},
        dob: "String",
        role: "",
        profile:{
            aboutMe: "",
            linkedInURL: "",
            githubURL: "",
            workExperience: "",
            skills: [],
            image: "",
            graduationDate: "",
            website: "",
            companyName: "",
            position: "",
            mobileNumber: "",
            department: "",
            address: "",
            educationLevel: "",
            major: "",
            GPA: ""
        }
    },
    isLoggedIn: false
}

const loginSlice = createSlice({
    name : 'login',
    initialState,
    extraReducers: {
        [loginThunk.pending] : 
        (state) => {
            state.isLoggedIn = false
        },
        [loginThunk.fulfilled] : 
        (state, {payload}) => {
            state.isLoggedIn = true
            state.userDetails = {
                ...payload,
                companyId: payload.profile.companyName
            }
        },
        [loginThunk.failed] : 
        (state) => {
            state.isLoggedIn = false
        },
    }
});

export default loginSlice.reducer

