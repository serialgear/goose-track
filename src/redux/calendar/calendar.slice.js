import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authLogout } from 'redux/auth/auth.operations';
import {
  getTasksOfMonth,
  addTaskOperation,
  editTaskOperation,
} from './calendar.operations';

const calendarInitState = {
  currentMonth: new Date().toISOString(),
  choosedDay: null,
  tasks: [],
  indexCurrentDay: null,
  isLoading: false,
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
    clearTasks(state) {
      state.tasks = [];
    },
    deleteTask(state, { payload }) {
      state.tasks[state.indexCurrentDay] = state.tasks[
        state.indexCurrentDay
      ].filter(task => task._id !== payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getTasksOfMonth.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTasksOfMonth.fulfilled, (state, { payload }) => {
        state.tasks = [...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getTasksOfMonth.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(authLogout.fulfilled, () => calendarInitState)

      .addCase(addTaskOperation.pending, state => state)

      .addCase(addTaskOperation.fulfilled, (state, { payload }) => {
        state.tasks[state.indexCurrentDay].push(payload);
        state.error = null;
      })
      .addCase(addTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(editTaskOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTaskOperation.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        const idx = state.tasks[state.indexCurrentDay].findIndex(
          task => task._id === payload._id
        );

        state.tasks[state.indexCurrentDay][idx] = payload;
      })
      .addCase(editTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const {
  addCurrentMonth,
  addIndexCurrentDay,
  addChoosedDay,
  clearTasks,
  deleteTask,
} = calendarSlice.actions;

export const calendarReducer = persistReducer(
  {
    key: 'calendar',
    storage,
    whitelist: ['currentMonth', 'choosedDay', 'indexCurrentDay'],
  },
  calendarSlice.reducer
);
