export const selectAuthToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
