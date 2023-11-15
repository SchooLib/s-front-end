import api from "./api"

export const creaateBook=(data)=>{
    console.log({dataServices:data})
    return api.post("/books",data)}