import axios from 'axios'
const API_BASE = process.env.REACT_APP_API_BASE;
const JOBS_API = `${API_BASE}/jobs`;

export const findInternalJobs = async (params) => {
    var api = JOBS_API + "?"
    console.log(params)
    if(params.hasOwnProperty("paymentType")) {
        console.log("type")

        api = api + "payment=" + params.paymentType + "&"
    }
    if(params.hasOwnProperty("company")) {
        console.log("company")
        api = api + "company=" + params.company + "&"
    }
    if(params.hasOwnProperty("term")) {
        console.log("term")

        api = api + "term=" + params.term
    }

    api = api.charAt(api.length - 1) === '&' ? api.slice(0, -1) : api
    console.log(api)
    const response = await axios.get(api);
    return response.data;
}

export const findExternalJobs = async (params) => {
    const keyword = params.keyword
    const location = params.location
    const country = params.country
    const sort_by = params.sort_by
    console.log(params)
    const response = await axios.get(`http://localhost:4000/jobs/external/?search=${keyword}&location=${location}&country=${country}&sort_by=${sort_by}`);
    console.log(response.data.results)
    return response.data.results;
}

export const findJobById = async (jobId) => {
    const response = await axios.get(`${JOBS_API}/${jobId}`)
    return response.data
}

export const createJob = async (jobDetails) => {
    console.log(jobDetails)
    const response = await axios.post(`${JOBS_API}/create`, jobDetails);
    return response.data
}

export const deleteJob = async (jobId) => {
    const response = await axios.delete(`${JOBS_API}/${jobId}`);
    return response.data
}