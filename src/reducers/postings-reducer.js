import { createSlice } from "@reduxjs/toolkit";
import { findAllPostingsThunk, findPostingsByCompanyThunk } from "../services/postings/postings-thunks";

const initialState = {
    isLoading: true,
    postings: [1,2,3]
}

const postingSlice = createSlice({
    name: 'postings',
    initialState,
    extraReducers: {
        [findAllPostingsThunk.pending]:
        (state) => {
            state.isLoading = true
        },
        [findAllPostingsThunk.fulfilled]:
        (state, payload) => {
            state.isLoading = false
            state.postings = payload
        },
        [findAllPostingsThunk.rejected]:
        (state) => {
            state.isLoading = true
        },

        [findPostingsByCompanyThunk.pending]:
        (state) => {
            state.isLoading = true
        },
        [findPostingsByCompanyThunk.fulfilled]:
        (state, payload) => {
            state.isLoading = false
            state.postings = payload
        },
        [findPostingsByCompanyThunk.rejected]:
        (state) => {
            state.isLoading = true
        }
    }
})

export default postingSlice.reducer