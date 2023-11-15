import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userGetAll } from "../services/UserAdminAPI";

const initialState={
    loading: false,
    message: "",
    data: "",
    status: "",
}

export const getAllUser=createAsyncThunk('/user',async()=>{
    try{
        const response=await userGetAll()
        return response.data
    }catch(err){
        return err
    }
})

const dataSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:{
    [getAllUser.pending]:(state,action)=>{
        return {...state,loading:true,message:"Please wait youur data until rpocess complete"}
    },
    [getAllUser.fulfilled]:(state,action)=>{
        return {...state,
        loading:false,
        data:action.payload}
    },
    [getAllUser.rejected]:(state,action)=>{
        return {...state,loading:false,
        status:"error"}
    }
    }
})

export default dataSlice.reducer