import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  getTasksOfMonth,
  addTaskOperation,
  deleteTaskOperation,
  editTaskOperation,
} from './calendar.operations';

const calendarInitState = {
  currentMonth: new Date().toISOString(),
  choosedDay: null,
  tasks: [],
  indexCurrentDay: 0,
  isLoggedIn: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: calendarInitState,
  reducers: {
    addCurrentMonth(state, { payload }) {
      state.currentMonth = payload;
    },
    addIndexCurrentDay(state, { payload }) {
      state.indexCurrentDay = payload;
    },
    addChoosedDay(state, { payload }) {
      state.choosedDay = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getTasksOfMonth.pending, state => state)
      .addCase(getTasksOfMonth.fulfilled, (state, { payload }) => {
        state.tasks = [...payload];
        state.error = null;
      })
      .addCase(getTasksOfMonth.rejected, (state, { payload }) => {
        state.error = payload;
      })

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
      })

      .addCase(editTaskOperation.pending, state => {
        state.error = null;
      })
      .addCase(editTaskOperation.fulfilled, (state, { payload }) => {
        const index = state.tasks.findIndex(task => task.id === payload.id);
        if (index !== -1) {
          state.tasks[index] = payload;
        }
      })
      .addCase(editTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { addCurrentMonth, addIndexCurrentDay, addChoosedDay } =
  calendarSlice.actions;

export const calendarReducer = persistReducer(
  {
    key: 'calendar',
    storage,
    whitelist: ['currentMonth'],
  },
  calendarSlice.reducer
);
