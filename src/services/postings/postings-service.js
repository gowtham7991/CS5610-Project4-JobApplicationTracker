import axios from 'axios'
const API_BASE = process.env.JOB_APP_API_BASE;
const POSTINGS_API = `${API_BASE}/postings`;

export const findPostings = async () => {
    const response = await axios.get(POSTINGS_API);
    return response.data;
}

export const findPostingsByCompany = async (companyId) => {
    const response = await axios.get(`${POSTINGS_API}/company/${companyId}`);
    return response.data;
}
