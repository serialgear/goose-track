import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-api-3uhn.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signupUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      const rejectMessage = error.response.data.message || error.message;

      return thunkAPI.rejectWithValue(rejectMessage);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', values);

      // тут я не впевнений що воно працює
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.delete('/user/logout');
      axios.defaults.headers.common.Authorization = '';
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
