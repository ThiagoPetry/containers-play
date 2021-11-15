import axios from "axios";

const api = axios.create({
    baseURL: 'https://ratings.tankionline.com/api/eu/profile',
});

export default api;
