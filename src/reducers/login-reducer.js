import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/login/login-thunks";

const initialState = {
    userDetails: {
        name: "Gowtham Potnuru",
        role: "student",
        uid: "638e45765b29f788cd32a034",
        email: "jjj@gmail.com",
        companyId: 33
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
                email: "",
                companyId: 0
            }
        },
        [loginThunk.fulfilled] : 
        (state, {payload}) => {
            state.isLoggedIn = true
            state.userDetails = {
                name: payload.name,
                role: payload.role.toLowerCase(),
                uid: payload._id,
                email: payload.email,
                companyId: payload.companyId
            }
        },
        [loginThunk.failed] : 
        (state) => {
            state.isLoggedIn = false
        },
    }
});

export default loginSlice.reducer

