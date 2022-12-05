import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile.json";
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
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
            newDOB = dateOfBirthFormat[2] + " " + monthNames[dateOfBirthFormat[1]-1] + " " + dateOfBirthFormat[0];
            state[0].dateOfBirth = newDOB
        }
    }
});

export const { editProfile } = profileSlice.actions
export default profileSlice.reducer;