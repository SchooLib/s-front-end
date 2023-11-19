import * as books from "../services/bookService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBook = createAsyncThunk('books/fetchBook', async ()=>{
    try{
      const response = await axios.get('http://103.193.176.43:3000/api/v1/books');
      return response.data;
    }catch (error){
      throw error
    }
  })
  
  export const reviewBook = createAsyncThunk(
    "books/reviewBook",
    async ({data}, { rejectWithValue }) => {
      try {
        const res = await books.reviewBook(data);
  
        return res.data;
      } catch (error) {
        return rejectWithValue(error.response);
      }
    }
  );
  const booksSlice = createSlice({
    name:'books',
    initialState:{
      data: [],
      loading: false,
      error:null,
      message:'',
      status:''
    },
    reducers:{},
    extraReducers:{
      [fetchBook.pending]: (state, action) => {
        return { ...state, loading: true};
      },
      [fetchBook.fulfilled]: (state, action) => {
        return {
          loading: false,
          message: action.payload?.meta.message,
          data: action.payload?.data.contents,
          // status: action.payload?.status,
        };
      },
      [fetchBook.rejected]: (state, action) => {
        return {
          loading: false,
          message: action.payload?.data.meta.message,
          data: {},
          status: "error",
        };
      },
      [reviewBook.pending]: (state, action) => {
        return { ...state, loading: true};
      },
      [reviewBook.fulfilled]: (state, action) => {
        return {
          loading: false,
          message: action.payload?.meta.message,
          data: action.payload?.data,
          status: action.payload?.meta.status,
        };
      },
      [reviewBook.rejected]: (state, action) => {
        return {
          loading: false,
          message: action.payload?.data.meta.message,
          data: {},
          status: "error",
        };
      },
    }
  })



  export const { fetchBookStart,fetchBookSuccess,fetchBookFailure} = booksSlice.actions;
  export const bookReducer = booksSlice.reducer;