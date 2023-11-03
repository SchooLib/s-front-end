import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAdmin = createAsyncThunk(
  "user/login",
  async (formData, { rejectWithValue }) => {
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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    user: "",
    status: "",
  },
  extraReducers: {
    [loginAdmin.pending]: (state, action) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [loginAdmin.fulfilled]: (state, action) => {
      console.log({ payload: action.payload });
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

export default authSlice.reducer;
