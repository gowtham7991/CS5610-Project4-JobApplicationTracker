import { createSlice } from "@reduxjs/toolkit";
import { findInternalJobsThunk, findExternalJobsThunk, findJobByIdThunk, createJobThunk, deleteJobThunk} from "../services/jobs/jobs-thunks";

const initialState = {
    isLoading: true,
    internalJobs: [1,2,3],
    externalJobs: [1,2,3],
    jobDetails: {}
}

const JobsSlice = createSlice({
    name: 'jobs',
    initialState,
    extraReducers: {
        [findInternalJobsThunk.pending]:
            (state) => {
                state.isLoading = true
                state.internalJobs = []
        },
        [findInternalJobsThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.internalJobs = payload
        },
        [findInternalJobsThunk.rejected]:
        (state) => {
            state.isLoading = true
            state.internalJobs = []
        },
        [findExternalJobsThunk.pending]:
        (state) => {
            state.isLoading = true
            state.externalJobs = []
        },
        [findExternalJobsThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.externalJobs = payload
        },
        [findExternalJobsThunk.rejected]:
        (state) => {
            state.isLoading = true
            state.externalJobs = []
        },
        [findJobByIdThunk.fulfilled]:
        (state, {payload}) => {
            state.jobDetails = payload
        },
        [createJobThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.internalJobs.push(payload)
        },
        [deleteJobThunk.fulfilled] :
        (state, { payload }) => {
        state.isLoading = false
        state.internalJobs = state.internalJobs
          .filter(job => job._id !== payload)
      },
    }
})

export default JobsSlice.reducer