import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { addTaskOperation, deleteTaskOperation } from './tasks.operations';

const tasksInitState = {
  tasks: [],
  isLoggedIn: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,

  extraReducers: builder => {
    builder
      .addCase(addTaskOperation.pending, state => state)

      .addCase(addTaskOperation.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.error = null;
      })
      .addCase(addTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(deleteTaskOperation.pending, state => {
        state.error = null;
      })
      .addCase(deleteTaskOperation.fulfilled, (state, { payload }) => {
        state.error = null;
        state.tasks = state.tasks.filter(task => task._id !== payload.id);
      })
      .addCase(deleteTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
