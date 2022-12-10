import { createSlice } from "@reduxjs/toolkit";
import { findAllCompaniesThunk, findCompanyByIdThunk } from "../services/companies/companies-thunk";

const initialState = {
    isLoading: true,
    companies: [],
    companyData: {}
}

const companySlice = createSlice({
    name: 'companies',
    initialState,
    extraReducers: {
        [findAllCompaniesThunk.pending]:
        (state) => {
            state.isLoading = true
            state.companies = []
        },
        [findAllCompaniesThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.companies = payload
        },
        [findAllCompaniesThunk.rejected]:
        (state) => {
            state.isLoading = false
        },
        [findCompanyByIdThunk.pending]:
        (state) => {
            state.isLoading = true
            state.companyData = {}
        },
        [findCompanyByIdThunk.fulfilled]:
        (state, {payload}) => {
            state.isLoading = false
            state.companyData = payload
        },
        [findCompanyByIdThunk.rejected]:
        (state) => {
            state.isLoading = false
            state.companyData = {}
        },
    }
})

export default companySlice.reducer