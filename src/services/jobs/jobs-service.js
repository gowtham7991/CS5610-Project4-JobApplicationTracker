import axios from 'axios'
const API_BASE = "https://jobapplicationtracker-server.onrender.com";
const JOBS_API = `${API_BASE}/jobs`;

export const findInternalJobs = async () => {
    const response = await axios.get(JOBS_API);
    return response.data;
}

export const findExternalJobs = async () => {
    const response = await axios.get(`${JOBS_API}/external`);
    return response.data;
}

export const findJobById = async (jobId) => {
    const response = await axios.get(`${JOBS_API}/detail/${jobId}`)
    return response.data
}

export const createJob = async (jobDetails) => {
    const response = await axios.post(`${JOBS_API}/create`, jobDetails);
    return response.data
}

export const deleteJob = async (jobId) => {
    const response = await axios.delete(`${JOBS_API}/${jobId}`);
    return response.data
}