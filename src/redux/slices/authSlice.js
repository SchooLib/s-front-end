import * as auth from "../services/authService";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (formData,{ rejectWithValue }) => {
    try {
      const res = await auth.loginAdmin(formData);

      if (res.data.meta.status == "success") {
        localStorage.setItem("user", JSON.stringify({ token: res.data.token }));
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchBook = createAsyncThunk('books/fetchBook', async ()=>{
  try{
    const response = await axios.get('http://localhost:3000/api/v1/books');
    return response.data;
  }catch (error){
    throw error
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    user: "",
    status: "",
    // theme: white,
  },
  reducers: {
    setTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
    // setAdmin: (state, action)=>{
    //   state.message= action.payload.meta.message;
    //   state.user= action.payload.data;
    //   state.status= action.payload.status;
    // }
    
  },
  extraReducers: {
    [loginAdmin.pending]: (state, action) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [loginAdmin.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.meta.message,
        user: action.payload?.data,
        status: action.payload?.status,
      };
    },
    [loginAdmin.rejected]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.data.meta.message,
        user: {},
        status: "error",
      };
    },
  },
});

const booksSlice = createSlice({
  name:'books',
  initialState:{
    data: [],
    loading: false,
    error:null,
  },
  reducers:{},
  extraReducers:{
    [fetchBook.pending]: (state, action) => {
      return { ...state, loading: true};
    },
    [fetchBook.fulfilled]: (state, action) => {
      return {
        loading: false,
        // message: action.payload?.meta.message,
        data: action.payload?.data.contents,
        // status: action.payload?.status,
      };
    },
    [fetchBook.rejected]: (state, action) => {
      return {
        loading: false,
        // message: action.payload?.data.meta.message,
        data: {},
        // status: "error",
      };
    },
  }
})

export const { setTheme } = authSlice.actions;
export const { fetchBookStart,fetchBookSuccess,fetchBookFailure} = booksSlice.actions;
export const authReducer = authSlice.reducer;
export const bookReducer = booksSlice.reducer;
