import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async ({data, redirect}, { rejectWithValue }) => {
    try {
      const res = await auth.loginAdmin(data);

      if (res.data.meta.status == "success") {
        localStorage.setItem("user", JSON.stringify({ 
          token: res.data.token
        }));
        redirect('/dashboard')
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({data, redirect}, { rejectWithValue }) => {
    try {
      const res = await auth.loginUser(data);

      if (res.data.meta.status == "success") {
        localStorage.setItem("user", JSON.stringify({ 
          token: res.data.token
        }));
        redirect('/dashboard')
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    user: "",
    status: "",
    isAuthenticated: false,
    // theme: white,
  },
  reducers: {
    // setTheme: (state, action) => {
    //   return {
    //     ...state,
    //     theme: action.payload,
    //   };
    // },
  },
  extraReducers: {
    [loginAdmin.pending]: (state) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [loginAdmin.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.meta.message,
        user: action.payload?.data,
        status: action.payload?.status,
        isAuthenticated: true,
      };
    },
    [loginAdmin.rejected]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.data.meta.message,
        user: {},
        status: "error",
        isAuthenticated: false,
      };
    },
    [loginUser.pending]: (state) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [loginUser.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.meta.message,
        user: action.payload?.data,
        status: action.payload?.status,
        isAuthenticated: true,
      };
    },
    [loginUser.rejected]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.data.meta.message,
        user: {},
        status: "error",
        isAuthenticated: false,
      };
    },
    
  },
});

// export const { setTheme } = authSlice.actions;
export default authSlice.reducer;
