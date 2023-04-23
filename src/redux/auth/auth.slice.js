import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
// import { STATUS } from 'constants/status.constants';
import { signupUser, authLogin, authLogout } from './auth.operations';

const authInitState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, (state, _) => state)
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.error = null;
        state.data = payload;
      })
      .addCase(authLogin.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(authLogout.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authLogout.rejected, (state, { payload }) => {
        state.isLoading = false;
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
