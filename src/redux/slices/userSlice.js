import * as user from "../services/userService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const res = await user.getAllUsers();

            // Return data dari respons
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
)

export const getUserById = createAsyncThunk(
    "user/getUserById",
    async (id, { rejectWithValue }) => {
        try {
            
            const res = await user.getUserById(id);


            // Return data dari respons
            return res.data;
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
        [getAllUsers.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        [getAllUsers.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                users: action.payload.data,
                status: action.payload.meta.status,
            }
        },
        [getAllUsers.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.data.message,
                status: action.payload.meta.status,
            }
        },

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
