import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBook = createAsyncThunk('books/fetchBook', async ()=>{
    try{
      const response = await axios.get('http://localhost:3000/api/v1/books');
      return response.data;
    }catch (error){
      throw error
    }
  })

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


  export const { fetchBookStart,fetchBookSuccess,fetchBookFailure} = booksSlice.actions;
  export const bookReducer = booksSlice.reducer;