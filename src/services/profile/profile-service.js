import axios from 'axios'
const API_BASE = process.env.REACT_APP_API_BASE;
const PROFILE_API = `${API_BASE}/profile`;

export const findProfileById = async (uid) => {
    const response = await axios.get(`${PROFILE_API}/${uid}`)
    return response.data
}

export const saveProfile = async (profileDetails) => {
    const response = await axios.put(`${PROFILE_API}/${profileDetails.uid}`, profileDetails)
    return response.data
}