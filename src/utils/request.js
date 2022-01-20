import axios from 'axios'
const service = axios.create({
    baseURL: 'https://qcshgh.fn.thelarkcloud.com',
    timeout: 5000,
});

// Add a request interceptor
service.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function(response) {
    // Do something with response data
    return response.data;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});


export default service;