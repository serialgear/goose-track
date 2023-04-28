import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://goose-track-api-3uhn.onrender.com/api';

export const getTasksOfMonth = createAsyncThunk('get/tasks', async ( date, 
{  rejectWithValue }) => {
    try {
        const {data} = await axios.get(`/tasks?month=${date.month}&year=${date.year}`)
       
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})