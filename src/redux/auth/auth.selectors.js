// export const selectAuthToken = state => state.auth.data;
// export const selectAuthToken = () => true;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;