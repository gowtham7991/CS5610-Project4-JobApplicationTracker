import { createSlice } from "@reduxjs/toolkit";
import { saveProfileThunk, findProfileByIdThunk } from "../services/profile/profile-thunks";

const initialState = {
    profileDetails : {},
    isLoading: true
}

const profileSlice = createSlice({
    name : 'profile',
    initialState,
    extraReducers: {
        [findProfileByIdThunk.pending] : 
        (state) => {
            state.isLoading = true
            state.profileDetails = {}
        },
        [findProfileByIdThunk.fulfilled] : 
        (state, {payload}) => {
            state.isLoading = false
            state.profileDetails = payload
        },
        [findProfileByIdThunk.failed] : 
        (state) => {
            state.isLoading = true
        },
        [saveProfileThunk.fulfilled] : 
        (state, {payload}) => {
            state.isLoading = false
            state.profileDetails = payload
        }
    }
});

export default profileSlice.reducer

