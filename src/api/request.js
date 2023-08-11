import axios from "axios"

const service = axios.create({
  baseURL: "https://nlstar.com/",
  headers: {
    "Content-type": "application/json",
  }
});


service.interceptors.response.use(
  (response) => {
    const res = response;
    if (res.status === 200 || res.status === 201) {
      return res;
    } else {
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error) => {
    if (error.response.status === 401) {
      Message({
        message: error.response.statusText,
        type: "error",
        duration: 5 * 1000,
      });
    }
    if (error.response.status === 500) {
      Message({
        message: error.response.statusText,
        type: "error",
        duration: 5 * 1000,
      });
    }
    return Promise.reject(error);
  }
);

export default service;
