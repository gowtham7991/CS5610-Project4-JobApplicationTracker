import axios from 'axios'
const API_BASE = "https://jobapplicationtracker-server.onrender.com";
const LOGIN_API = `${API_BASE}/login`;

export const login = async (userCredentials) => {
    const response = await axios.post(LOGIN_API, userCredentials)
    return response.data
}