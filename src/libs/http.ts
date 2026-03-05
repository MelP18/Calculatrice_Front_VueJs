import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const http = axios.create(
    {
        baseURL: baseURL
    }
);

export default http;