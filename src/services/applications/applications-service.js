import axios from 'axios'
const API_BASE = "https://jobapplicationtracker-server.onrender.com";
const APPLICATIONS_API = `${API_BASE}/applications`;

export const findApplications = async (uid) => {
    const response = await axios.get(`${APPLICATIONS_API}/student/${uid}`)
    return response.data
}

export const findApplicationsByJobId = async (uid) => {
    const response = await axios.get(`${APPLICATIONS_API}/job/${uid}`)
    return response.data
}

export const createApplication = async (applictionDetails) => {
    const response = await axios.post(APPLICATIONS_API, applictionDetails)
    return response.data
}

export const withdrawApplication = async (applicationId) => {
    const response = await axios.delete(`${APPLICATIONS_API}/${applicationId}`)
    return response.data
}