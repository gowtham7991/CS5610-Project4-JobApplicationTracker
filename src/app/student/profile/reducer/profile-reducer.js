import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile.json";
import { findProfileThunk } from "../../../../services/profile/profile-thunks"

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const initialState = {
    profile: profile,
    loading: false
}
const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: {
        [findProfileThunk.pending]:
            (state) => {
                state.loading = true
                state.profile = []
            },
        [findProfileThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.profile = payload
            },
        [findProfileThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },
    reducers: {
        editProfile(state, action) {
            state[0].firstName = action.payload.profile["name"].split(" ")[0]
            state[0].lastName = action.payload.profile["name"].split(" ")[1]
            state[0].bio = action.payload.profile["bio"]
            state[0].location = action.payload.profile["location"]
            state[0].website = action.payload.profile["website"]
            let dateOfBirthFormat;
            dateOfBirthFormat = action.payload.profile["birthdate"].split("-");
            let newDOB;
            newDOB = dateOfBirthFormat[2] + " " + monthNames[dateOfBirthFormat[1] - 1] + " " + dateOfBirthFormat[0];
            state[0].dateOfBirth = newDOB
        }
    }
});

export const {editProfile} = profileSlice.actions
export default profileSlice.reducer;