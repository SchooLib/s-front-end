import axios from "axios";

const API = axios.create({
  baseURL: "http://103.193.176.43:3000/api/v1",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("user").token
    )}`;
  }
  return req;
});

export default API;