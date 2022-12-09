import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./register-service"

export const studentRegistrationThunk = createAsyncThunk(
    'register/student', async (details) => await service.studentRegister(details)
)

export const recruiterRegistrationThunk = createAsyncThunk(
    'register/recruiter', async (details) => await service.recruiterRegister(details)
)