import axios from 'axios'

const http = axios.create(
    {
        baseURL: "https://calculatrice-backend-express-js.vercel.app/api"
    }
);

export default http;