import * as achievement from '../services/achievementService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from "react-hot-toast";

export const getAchievements = createAsyncThunk(
    'achievements/getAchievements',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://103.193.176.43:3000/api/v1/achievements');
            //const res = await achievement.getAchievements();
        return res.data;
        } catch (error) {
        return rejectWithValue(error.response);
        }
    }
);

export const claimAchievement = createAsyncThunk(
    'achievements/claimAchievement',
    async (achievementId, { rejectWithValue }) => {
        try {
            //const res = await achievement.claimAchievement(data);
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
            const res = await axios.patch('http://103.193.176.43:3000/api/v1/achievements/claim', achievementId, config);

            if (res.data.meta.status == "success") {
                toast.success(res.data.meta.message);
            }

            // Return data dari respons
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

const achievementSlice = createSlice({
    name: 'achievements',
    initialState: {
        loading: false,
        message: '',
        achievements: [],
        status: '',
    },
    reducers: {},
    extraReducers: {
        [getAchievements.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
            };
        },
        [getAchievements.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                achievements: action.payload.data,
                status: action.payload.meta.status,
            };
        },
        [getAchievements.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.data.message,
                status: action.payload.meta.status,
            };
        },

        [claimAchievement.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
            };
        },
        [claimAchievement.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.data.message,
                status: action.payload.meta.status,
            };
        },
        [claimAchievement.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.data.message,
                status: action.payload.meta.status,
            };
        },
    },
});

export default achievementSlice.reducer;