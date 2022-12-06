import axios from 'axios'
const API_BASE = process.env.JOB_APP_API_BASE;
const JOBS_API = `${API_BASE}/jobs`;

export const findAllJobs = async () => {
    const response = await axios.get(JOBS_API);
    return response.data;
}

export const findExternalJobs = async () => {
    const response = await axios.get(`${JOBS_API}/external`);
    return response.data;
}

export const findJobById = async (id) => {
    const response = await axios.get(`${JOBS_API}/${id}`)
    return response.data
}

export const createJob = async (jobDetails) => {
    const response = await axios.post(`${JOBS_API}/create`, jobDetails);
    return response.data
}