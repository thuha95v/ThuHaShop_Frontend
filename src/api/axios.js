import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

httpClient.interceptors.response.use(
    function (response) {
        return response;
    }, 
    function (error) {
        // if(error.response.status == 500){
        //     const auth = useAuthStore();
        //     auth.logout();
        // }
        return Promise.reject(error);
  });

const get = async(url , options) => {
    if(options) {
        options.keyword = options.keyword ? options.keyword : "";
        url += `?page=${options.page}&limit=${options.rowsPerPage}&keyword=${options.keyword}` 
    }
    const headers = authHeader(url)
    return (await httpClient.get(url, { headers })).data
}

const post = async (url, body) => {
    const headers = authHeader(url)
    return (await httpClient.post(url, body, { headers })).data
}

function authHeader(url) {
    const { user }  = useAuthStore();
    const isLoggedIn = !!user?.token;
    if (isLoggedIn) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return { };
    }
}

export default { get, post }

