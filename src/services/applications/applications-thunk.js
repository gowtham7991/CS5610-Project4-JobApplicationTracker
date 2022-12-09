import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as service from "./applications-service"

export const findApplicationsThunk = createAsyncThunk(
    'applications', async (uid) => await service.findApplications(uid)
)

export const findApplicationsByJobIdThunk = createAsyncThunk(
    'applications', async (uid) => await service.findApplicationsByJobId(uid)
)

export const createApplicationThunk = createAsyncThunk(
    'applications/create', async (applicationDetails) => {
        await service.createApplication(applicationDetails)
    }
)

export const withdrawApplicationThunk = createAsyncThunk(
    'applications/delete', async (applicationId) => {
        await service.withdrawApplication(applicationId)
        return applicationId
    }
)