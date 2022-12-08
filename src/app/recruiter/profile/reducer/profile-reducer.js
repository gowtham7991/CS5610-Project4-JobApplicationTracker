import { createSlice } from "@reduxjs/toolkit";
import user from "../data/profile.json";
import { findProfileThunk } from "../../../../services/profile/profile-thunks"

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const initialState = {
//     user: user,
//     loading: false
// }
const profileSliceRecruiter = createSlice({
    name: "user",
    initialState: user,
    reducers: {
        [findProfileThunk.pending]:
            (state) => {
                state.loading = true
                state.user = []
            },
        [findProfileThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.user = payload
            },
        [findProfileThunk.rejected]:
            (state) => {
                state.loading = false
            }
    }
});

export default profileSliceRecruiter.reducer;