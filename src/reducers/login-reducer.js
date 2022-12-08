import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/login/login-thunks";

const initialState = {
    userDetails: {
        name: "Gowtham Potnuru",
        role: "student",
        uid: 222222,
        email: "jjj@gmail.com"
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
            state.userDetails = {
                name: "",
                role: "",
                uid: 0,
                email: ""
            }
        },
        [loginThunk.fulfilled] : 
        (state, {payload}) => {
            state.isLoggedIn = true
            state.userDetails = {
                name: payload.name,
                role: payload.role,
                uid: payload.uid,
                email: payload.email
            }
        },
        [loginThunk.failed] : 
        (state) => {
            state.isLoggedIn = false
        },
    }
});

export default loginSlice.reducer

