import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./jobs-service"

export const findInternalJobsThunk = createAsyncThunk(
  'jobs/findJobs', async () =>
    await service.findInternalJobs()
)

export const findExternalJobsThunk = createAsyncThunk(
    'jobs/findExternalJobs',
    async () => {
      await service.findExternalJobs()
  })

export const findJobByIdThunk = createAsyncThunk(
    'jobs/findJobByid', async () =>
      await service.findJobById()
  )

export const createJobThunk = createAsyncThunk(
    'jobs/createJob',
    async (jobDetails) =>
      await service.createJob(jobDetails)
)

export const deleteJobThunk = createAsyncThunk(
  'jobs/deleteJob',
  async (jobId) =>
    await service.deleteJob(jobId)
)
