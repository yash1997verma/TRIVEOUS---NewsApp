// import { createAsyncThunk } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const newsApi = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=99ed0c36654f48faaad4608f57ff8bf8';



export const getNewsAsync = createAsyncThunk(
    'news/getNewsAsync',
    
    async()=>{
        try {
            const res = await fetch(`${newsApi}`);
            const resData = await res.json();
            return resData.articles;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);


const newsSlice = createSlice({
    name: 'news',
    initialState : {
        news : [],
        status: 'idle',
        error: null,
        // appView
    },
    reducers: {
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getNewsAsync.fulfilled,(state, action)=>{
            state.news = action.payload;
            state.status = 'success';
        })
        .addCase(getNewsAsync.pending,(state, action)=>{
            state.status = 'pending';
        })
        .addCase(getNewsAsync.rejected,(state, action)=>{
            toast.error('Error in loading news');
        })
    }
});

//export news actions
export const newsAction = newsSlice.actions;
//export reducers
export const newsReducer = newsSlice.reducer;
