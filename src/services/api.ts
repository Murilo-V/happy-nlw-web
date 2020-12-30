import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-nextlevelweek.herokuapp.com'
})

export default api;