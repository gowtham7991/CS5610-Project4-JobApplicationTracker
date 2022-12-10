import axios from 'axios'
const API_BASE = "https://jobapplicationtracker-server.onrender.com";
const COMPANY_API = `${API_BASE}/companies`;

export const findAllCompanies = async () => {
    const response = await axios.get(COMPANY_API)
    return response.data
}

export const findCompanyById = async (companyId) => {
    const response = await axios.get(`${COMPANY_API}/${companyId}`)
}