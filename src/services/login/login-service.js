import axios from 'axios'
const API_BASE = process.env.JOB_APP_API_BASE;
const LOGIN_API = `${API_BASE}/login`;

export const login = async (userCredentials) => {
    const response = await axios.post(LOGIN_API, userCredentials)
    return response.data
}