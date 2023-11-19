//import * as user from "../services/userService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getUserById = createAsyncThunk(
    "user/getUserById",
    async (id, { rejectWithValue }) => {
        try {
            // Dapatkan token dari localStorage
            const localStorageData = localStorage.getItem("user");

            // Periksa apakah data ditemukan
            if (!localStorageData) {
                throw new Error("Data not found in localStorage");
            }

            // Parse objek dari data localStorage
            const localStorageObj = JSON.parse(localStorageData);

            // Dapatkan token dari objek
            const token = localStorageObj.token;

            // Periksa apakah token ditemukan
            if (!token) {
                throw new Error("Token not found");
            }

            // Konfigurasi header dengan token Bearer
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            // Lakukan permintaan dengan konfigurasi header
            const res = await axios.get(`http://103.193.176.43:3000/api/v1/user/${id}`, config);

            // Return data dari respons
            return res.data;
            //const res = await axios.get(`http://103.193.176.43:3000/api/v1/user/${id}`)
            //const res = await user.getUserById(id)
            //return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        message: "",
        user: {},
        status: "",
    },
    reducers: {},
    extraReducers: {
        [getUserById.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        [getUserById.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                user: action.payload.data,
                status: action.payload.meta.status,
            }
        },
        [getUserById.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.data.message,
                // status: action.payload.meta.status,
            }
        },
    },
})

export default userSlice.reducer
