import { createSlice } from "@reduxjs/toolkit";
import { findApplicationsThunk, withdrawApplicationThunk, createApplicationThunk, findApplicationsByJobIdThunk } from "../services/applications/applications-thunk";

const initialState = {
    isLoading: true,
    applications: [1,2,4]
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
        [findApplicationsThunk.rejected]: 
            (state) => {
            state.isLoading = true
            state.applications = []
        },
        [findApplicationsByJobIdThunk.pending]: 
            (state) => {
            state.isLoading = true
            state.applications = []
        },
        [findApplicationsByJobIdThunk.fulfilled]:
            (state, {payload}) => {
            state.isLoading = false
            state.applications = payload
        },
        [findApplicationsByJobIdThunk.rejected]: 
            (state) => {
            state.isLoading = true
            state.applications = []
        },
        [withdrawApplicationThunk.fulfilled]:
            (state, {payload}) => {
            state.isLoading = false
            state.applications = state.applications.filter(application => application._id !== payload)
        },
        [createApplicationThunk.fulfilled]:
            (state, {payload}) => {
            state.isLoading = false
            state.applications.push(payload)
        }
    }
})

export default applicationsSlice.reducer