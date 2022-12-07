import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as service from "./applications-service"

export const findApplicationsThunk = createAsyncThunk(
    'applications', async (uid) => await service.findApplications(uid)
)

export const withdrawApplicationThunk = createAsyncThunk(
    'applications/delete', async (applicationId) => {
        await service.withdrawApplication(applicationId)
        return applicationId
    }
)