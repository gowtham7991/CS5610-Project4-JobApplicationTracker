import { createSlice } from "@reduxjs/toolkit";
import { findApplicationsThunk, withdrawApplicationThunk } from "../services/applications/applications-thunk";

const initialState = {
    isLoading: true,
    applications: true
}

const applicationsSlice = createSlice({
    name: 'applications',
    initialState,
    extraReducers: {
        [findApplicationsThunk.pending]: 
        (state) => {
            state.isLoading = true
            state.applications = []
        },
        [findApplicationsThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.applications = payload
        },
        [withdrawApplicationThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.applications = state.applications.filter(application => application._id !== payload)
        }
    }
})

export default applicationsSlice.reducer