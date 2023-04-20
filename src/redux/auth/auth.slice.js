import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'constants/status.constants';
import { signupUser } from './auth.operations';

const initialState = {
  data: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.data = payload;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      });
  },
});

export const authReducer = persistReducer(
  {
    key: 'auth',
    storage,
  },
  authSlice.reducer
);
