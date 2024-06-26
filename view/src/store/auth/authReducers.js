import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, logoutUser, isAuthenticated } from "./authActions";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    loginError: null,
    signupError: null,
    signUpSuccess: null,
    userData: {}
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.loginError = null;
            state.userData = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.loginError = action.error.message;
            state.userData = {};
        })
        builder.addCase(isAuthenticated.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(isAuthenticated.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.loginError = null;
            state.userData = action.payload;
        })
        .addCase(isAuthenticated.rejected, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(signupUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.signUpSuccess= true;
            state.signupError = null;
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.signUpSuccess= false;
            state.signupError = action.error.message;
        })
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logoutUser.fulfilled, () => {
            return initialState;
        })
        .addCase(logoutUser.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export default authSlice.reducer;