//https://viacep.com.br/ws/ 01310930/json/
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
export default api;