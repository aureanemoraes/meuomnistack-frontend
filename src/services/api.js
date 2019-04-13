import axios from 'axios';

const api = axios.create({
    baseURL: "https://meuomnistack-backend.herokuapp.com"
});

export default api;