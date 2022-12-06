import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./register-service"

export const studentRegistrationThunk = createAsyncThunk(
    'register/student', async () => await service.studentRegistrationThunk()
)

export const recruiterRegistrationThunk = createAsyncThunk(
    'register/recruiter', async () => await service.recruiterRegistrationThunk()
)