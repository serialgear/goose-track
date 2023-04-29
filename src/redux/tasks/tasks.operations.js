import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'redux/auth/auth.operations';

export const addTaskOperation = createAsyncThunk(
  'tasks/addTaskOperation',
  async (taskData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (token === null) {
        return thunkAPI.rejectWithValue('Error authorization');
      }

      setAuthHeader(token);

      const response = await axios.post('/tasks', taskData);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const deleteTaskOperation = createAsyncThunk(
  'add/tasks',
  async (taskData, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', taskData);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
