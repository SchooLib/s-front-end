import * as achievement from '../services/achievementService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    async ({data}, { rejectWithValue }) => {
        try {
            const res = await achievement.claimAchievement(data);
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