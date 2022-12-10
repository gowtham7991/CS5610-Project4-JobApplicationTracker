import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as service from "./companies-service"

export const findAllCompaniesThunk = createAsyncThunk(
    'companies', async () => await service.findAllCompanies()
)

export const findCompanyByIdThunk = createAsyncThunk(
    'companies/companyId', async (companyId) => await service.findCompanyById(companyId)
)