import api from "./api";

export const loginAdmin = (data) => api.post("/user/admin/login", data)
