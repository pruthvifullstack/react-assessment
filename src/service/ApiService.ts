import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("Interceptor Request Error" + error);
  }
);

//This allows you to intercept the response and check the status and error messages and if ncessary reject the promise.
instance.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return response;
  },
  (error) => {
    console.log("Interceptor Response Error" + error);
  }
);
export default instance;
