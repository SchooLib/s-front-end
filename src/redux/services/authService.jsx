import api from "./api";

export const loginAdmin = (data) => {

    const {username,password}=data
    console.log(username,password)
    return api.post("/user/admin/login",{username,
    password})
}