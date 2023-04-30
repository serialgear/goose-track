import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { getTasksOfMonth } from './calendar.operations';
import { authLogout } from 'redux/auth/auth.operations';

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
      .addCase(authLogout.fulfilled, () => calendarInitState);
  },
});

export const {
  addCurrentMonth,
  addIndexCurrentDay,
  addChoosedDay,
  clearTasks,
} = calendarSlice.actions;

export const calendarReducer = persistReducer(
  {
    key: 'calendar',
    storage,
    whitelist: ['currentMonth', 'choosedDay', 'indexCurrentDay'],
  },
  calendarSlice.reducer
);
