import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./profile-service"

export const findProfileThunk = createAsyncThunk(
    'profile/findProfile', async (email) =>
        await service.findByEmail(email)
)