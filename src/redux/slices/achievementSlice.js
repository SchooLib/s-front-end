/* eslint-disable no-unused-vars */
import * as achievement from '../services/achievementService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from "react-hot-toast";

export const getAchievements = createAsyncThunk(
    'achievements/getAchievements',
    async (_, { rejectWithValue }) => {
        try {
            const res = await achievement.getAchievements();
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
            
            const res = await achievement.claimAchievement(achievementId);

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