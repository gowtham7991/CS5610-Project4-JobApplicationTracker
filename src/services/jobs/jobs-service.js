import axios from 'axios'
const API_BASE = process.env.REACT_API_BASE;
// const API_BASE = "https://jobapplicationtracker-server.onrender.com";
const JOBS_API = `${API_BASE}/jobs`;

export const findInternalJobs = async () => {
    const response = await axios.get(JOBS_API);
    return response.data;
}

export const findExternalJobs = async (params) => {
    const keyword = params.keyword
    const location = params.location
    const country = params.country
    const sort_by = params.sort_by
    console.log(params)
    const response = await axios.get(`http://localhost:3000/jobs/external/?search=${keyword}&location=${location}&country=${country}&sort_by=${sort_by}`);
    console.log(response.data.results)
    return response.data.results;
}

export const findJobById = async (jobId) => {
    const response = await axios.get(`${JOBS_API}/${jobId}`)
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