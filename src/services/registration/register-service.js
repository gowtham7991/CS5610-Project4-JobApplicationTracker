import axios from 'axios'
const API_BASE = "https://jobapplicationtracker-server.onrender.com";
const REGISTRATION_API = `${API_BASE}/register`;

export const studentRegister = async (studentDetails) => {
    console.log(studentDetails)
    const response = await axios.post(`${REGISTRATION_API}/student`, studentDetails)
    return response.data
}

export const recruiterRegister = async (recruiterDetails) => {
    const response = await axios.post(`${REGISTRATION_API}/recruiter`, recruiterDetails)
    return response.data
}
