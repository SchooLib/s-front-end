import api from "./api";

export const loginAdmin = (data) => api.post("/user/admin/login", data)
export const loginUser = (data) => api.post("/user/login", data)
