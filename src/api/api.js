import axios from 'axios';

const list_except_path_auth = [
  '/login',
  '/healthz'
]
export default function handler() {
  const instance = axios.create({
    baseURL: 'https://squid-app-9q7r5.ondigitalocean.app',
    withCredentials:true
    //headers: {"authentication":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiZXhwIjoxNjgyMjAzOTI3fQ.8LfVp_d8q14QPYLHYV3Rea_Vxl4tsWA03cRv2FiC8mo"}
  });
  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //console.log(config.headers,"headers")
    if (list_except_path_auth.indexOf(config.url) === -1){
      const token = sessionStorage.getItem("token"); 
      //console.log(config,"request",config.url)
      
      //config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
      if (token !== null){
           config.headers['Bearer-Authentication'] = token;
       // instance.defaults.headers.common['Bearer-Authentication'] = token;

        console.log( token,"::token",config)
        return config;
      }else{
        alert("Session has expired, please try to login again")
      }
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response,"response")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  //const instance = axios.default.baseUrl = "http://localhost:5000";
 
  return instance;
}
