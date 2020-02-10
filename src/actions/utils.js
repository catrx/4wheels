import axios from "axios";

axios.defaults.headers.common['Authorization'] = `${localStorage.token}`;
axios.defaults.baseURL = 'http://localhost:8081';
export {axios}


