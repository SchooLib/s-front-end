import api from "./api";

export const getUserById = (id) => api.get(`/user/${id}`)