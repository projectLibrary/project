import axios from "axios"

axios.defaults.baseURL = 'http://localhost/api/v1';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export default axios;
axios.defaults.headers.common = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
};