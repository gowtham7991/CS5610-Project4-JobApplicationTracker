import axios from 'axios'
const API_BASE = process.env.JOB_APP_API_BASE;
const APPLICATIONS_API = `${API_BASE}/applications`;

export const findApplications = async (uid) => {
    const response = await axios.get(`${APPLICATIONS_API}/${uid}`)
    return response.data
}

export const withdrawApplication = async (applicationId) => {
    const response = await axios.delete(`${APPLICATIONS_API}/${applicationId}`)
    return response.data
}