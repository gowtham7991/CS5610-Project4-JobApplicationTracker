import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./profile-service"

export const findProfileByIdThunk = createAsyncThunk(
    'profile/get', async (uid) => await service.findProfileById(uid)
)

export const saveProfileThunk = createAsyncThunk(
    'profile/save', async (profileDetails) => await service.saveProfile(profileDetails)
)