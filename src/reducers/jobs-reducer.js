import { createSlice } from "@reduxjs/toolkit";
import { findInternalJobsThunk, findExternalJobsThunk, findJobByIdThunk, createJobThunk, deleteJobThunk} from "../services/jobs/jobs-thunks";

const initialState = {
    isInternalJobListLoading: true,
    isExternalJobListLoading: true,
    isJobDetailLoading: true,
    internalJobs: [],
    externalJobs: [],
    jobDetails: {}
}

const JobsSlice = createSlice({
    name: 'jobs',
    initialState,
    extraReducers: {
        [findInternalJobsThunk.pending]:
            (state) => {
                state.isInternalJobListLoading = true
                state.internalJobs = []
        },
        [findInternalJobsThunk.fulfilled]:
        (state, {payload}) => {
            state.isInternalJobListLoading = false
            state.internalJobs = payload
        },
        [findInternalJobsThunk.rejected]:
        (state) => {
            state.isInternalJobListLoading = true
            state.internalJobs = []
        },
        [findExternalJobsThunk.pending]:
        (state) => {
            state.isExternalJobListLoading = true
            state.externalJobs = []
        },
        [findExternalJobsThunk.fulfilled]:
        (state, {payload}) => {
            state.isExternalJobListLoading = false
            state.externalJobs = payload
            console.log('jobs-reducer', {payload})
        },
        [findExternalJobsThunk.rejected]:
        (state) => {
            state.isExternalJobListLoading = true
            state.externalJobs = []
        },
        [findJobByIdThunk.pending]:
            (state) => {
                state.isJobDetailLoading = true
                state.jobDetails = {}
        },
        [findJobByIdThunk.fulfilled]:
        (state, {payload}) => {
            state.isJobDetailLoading = false
            state.jobDetails = payload
        },
        [findJobByIdThunk.rejected]:
        (state) => {
            state.isJobDetailLoading = true
            state.jobDetails = {}
        },
        [createJobThunk.fulfilled]:
        (state, {payload}) => {
            state.isInternalJobListLoading = false
            state.internalJobs.push(payload)
        },
        [deleteJobThunk.fulfilled] :
        (state, { payload }) => {
        state.isInternalJobListLoading = false
        state.internalJobs = state.internalJobs
          .filter(job => job._id !== payload)
      },
    }
})

export default JobsSlice.reducer