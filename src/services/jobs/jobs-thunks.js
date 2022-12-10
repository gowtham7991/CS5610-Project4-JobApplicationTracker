import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./jobs-service"

export const findInternalJobsThunk = createAsyncThunk(
  'jobs/findJobs', async () =>
    await service.findInternalJobs()
)

export const findExternalJobsThunk = createAsyncThunk(
    'jobs/findExternalJobs',
    async (params) => {
      const jobs = await service.findExternalJobs(params);
      return jobs;
  })

export const findJobByIdThunk = createAsyncThunk(
    'jobs/findJobByid', async (jobId) =>
      await service.findJobById(jobId)
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
