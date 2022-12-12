import axios from 'axios'
const API_BASE = process.env.REACT_APP_API_BASE;
const COMPANY_API = `${API_BASE}/companies`;

export const findAllCompanies = async () => {
    const response = await axios.get(COMPANY_API)
    return response.data
}

export const findCompanyById = async (companyId) => {
    const response = await axios.get(`${COMPANY_API}/${companyId}`)
}