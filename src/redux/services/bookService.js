import api from "./api";

export const reviewBook = (data) => api.post("/books/review", data)