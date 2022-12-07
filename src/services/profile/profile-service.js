import axios from 'axios';

const API_BASE = process.env.JOB_APP_API_BASE;
const PROFILE_API = `${API_BASE}/profile`;

export const findByEmail = async (email) => {
    const response = await axios.get(`${PROFILE_API}/${email}`);
    const profile = response.data;
    return profile;
}