import axios from 'axios'
const API_BASE = process.env.REACT_APP_API_BASE;
const LOGIN_API = `${API_BASE}/login`;

export const login = async (userCredentials) => {
    const response = await axios.post(LOGIN_API, userCredentials)
    console.log(response.status)
    return response.data
}