import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

http.interceptors.request.use((settings) => {
    const token = localStorage.getItem('token')
    if (token) {
        settings.headers.Authorization = `Bearer ${token}`
    }
    return settings
}, (err) => {
    return Promise.reject(err);
})

export default http;