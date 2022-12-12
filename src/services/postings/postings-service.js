import axios from 'axios'
const API_BASE = "http://localhost:4000";
const POSTINGS_API = `${API_BASE}/postings`;

export const findPostings = async () => {
    const response = await axios.get(POSTINGS_API);
    return response.data;
}

export const findPostingsByCompany = async (companyId) => {
    const response = await axios.get(`${POSTINGS_API}/company/${companyId}`);
    console.log(response.data)
    return response.data;
}

export const deletePosting = async (jobId) => {
    const response = await axios.delete(`${API_BASE}/jobs/${jobId}`);
    return jobId
}