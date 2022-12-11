import { createSlice } from "@reduxjs/toolkit";
import { findAllPostingsThunk, findPostingsByCompanyThunk, deletePostingThunk } from "../services/postings/postings-thunks";

const initialState = {
    isLoading: true,
    postings: []
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
        (state, {payload}) => {
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
        (state, {payload}) => {
            state.isLoading = false
            console.log(payload)
            state.postings = payload
        },
        [findPostingsByCompanyThunk.rejected]:
        (state) => {
            state.isLoading = true
        },
        [deletePostingThunk.fulfilled] :
        (state, { payload }) => {
        state.isLoading = false
        state.postings = state.postings
          .filter(job => job._id !== payload)
      },
    }
})

export default postingSlice.reducer