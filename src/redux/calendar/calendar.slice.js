import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { getTasksOfMonth } from './calendar.operations';

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
    addIndexCyrrentDay(state, {payload}) {
      state.indexCurrentDay = payload;
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
      });
  },
});

export const { addCurrentMonth, addIndexCyrrentDay } = calendarSlice.actions;

export const calendarReducer = persistReducer(
  {
    key: 'calendar',
    storage,
    whitelist: ['currentMonth'],
  },
  calendarSlice.reducer
);
