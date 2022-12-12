import axios from 'axios'
const API_BASE = process.env.SERVER_URL;
const APPLICATIONS_API = `${API_BASE}/applications`;

export const findApplications = async (uid) => {
    const response = await axios.get(`${APPLICATIONS_API}/${uid}`)
    return response.data
}

export const findApplicationsByJobId = async (uid) => {
    const response = await axios.get(`${APPLICATIONS_API}/jobs/${uid}`)
    return response.data
}

export const createApplication = async (applictionDetails) => {
    const response = await axios.post(APPLICATIONS_API, applictionDetails)
    console.log("------" + response.data)
    return response.data
}

export const withdrawApplication = async (applicationId) => {
    const response = await axios.delete(`${APPLICATIONS_API}/${applicationId}`)
    return applicationId
}