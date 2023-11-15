import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async ({data,redirect}, { rejectWithValue }) => {
    try {
    //redirect('/dashboard')
    console.log(redirect,data)
      const res = await auth.loginAdmin(data);
      console.log(redirect,"kk")

      if (res.data.meta.status == "success") {
        redirect('/dashboard')
        localStorage.setItem("user", JSON.stringify({ token: res.data.token }));
    }

      return res.data;
    } catch (error) {
    console.log(error)
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

// export const { setTheme } = authSlice.actions;
export default authSlice.reducer;