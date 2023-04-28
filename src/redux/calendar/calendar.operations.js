import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'redux/auth/auth.operations';

// axios.defaults.baseURL = 'https://goose-track-api-3uhn.onrender.com/api';

export const getTasksOfMonth = createAsyncThunk(
  'get/tasks',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Error authorization');
    }

    setAuthHeader(token);

    try {
      const { data } = await axios.get(
        `/tasks?month=${date.month}&year=${date.year}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
