import axios from 'axios';

export function fetch(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            timeout: 30 * 1000 // 30秒超时
        });
        // Add a request interceptor
        instance.interceptors.request.use(function (config) {
            if(localStorage.getItem("token")){
                config.headers.Authorization = localStorage.getItem("token")
            }
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        instance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            // console.log({
            //     response
            // })
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });

        instance(options)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.log('请求异常信息：' + error);
                reject(error);
            });
    });
}