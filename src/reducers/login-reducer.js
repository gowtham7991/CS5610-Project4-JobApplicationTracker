import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/login/login-thunks";

const initialState = {
    userDetails: {
        name: "",
        role: ""
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
                role: ""
            }
        },
        [loginThunk.fulfilled] : 
        (state, {payload}) => {
            state.isLoggedIn = true
            state.userDetails = {
                name: payload.name,
                role: payload.role
            }
        },
        [loginThunk.failed] : 
        (state) => {
            state.isLoggedIn = false
        },
    }
});

export default loginSlice.reducer

