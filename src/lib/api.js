const { default: axios } = require("axios");

const apiRequest = axios.create({
   baseURL: 'https://qd378qqp-8080.brs.devtunnels.ms/api/v1/'
 });

export default apiRequest
