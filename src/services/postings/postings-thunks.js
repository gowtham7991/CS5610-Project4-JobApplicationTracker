import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./postings-service"

export const findAllPostingsThunk = createAsyncThunk(
  'postings', async () =>
    await service.findPostings()
)

export const findPostingsByCompanyThunk = createAsyncThunk(
    'postings/company', async (companyId) => await service.findPostingsByCompany(companyId)
)

export const deletePostingThunk = createAsyncThunk(
  'jobs/deleteJob',
  async (jobId) =>
    await service.deletePosting(jobId)
)