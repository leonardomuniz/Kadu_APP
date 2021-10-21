import axios from 'axios';

const api = axios.create({
    baseURL: "https://kaduapp.herokuapp.com/"
});

export default api;