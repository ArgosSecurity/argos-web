const { default: axios } = require("axios");

const apiRequest = axios.create({
   baseURL: 'http://localhost:8080/api/v1/'
 });

export default apiRequest