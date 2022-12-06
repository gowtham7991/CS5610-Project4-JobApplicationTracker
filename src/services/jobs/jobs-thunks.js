import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./jobs-service"

export const findAllJonsThunk = createAsyncThunk(
  'jobs/findJobs', async () =>
    await service.findAllJobs()
)

export const findExternalJobsThunk = createAsyncThunk(
    'jobs/findExternalJobs',
    async () => {
      await service.findExternalJobs(tuitId)
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
