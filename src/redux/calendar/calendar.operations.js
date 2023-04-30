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
  'tasks/deleteTaskOperation',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTaskOperation = createAsyncThunk(
  'tasks/editTaskOperation',
  async (task, thunkAPI) => {
    try {
      console.log(task);
      // const response = await axios.patch(`/tasks/${task.id}`, task);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
