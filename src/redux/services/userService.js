import api from "./api";

export const getUserById = (id) => api.get(`/user/${id}`)
export const getAllUsers = () => api.get("/user")