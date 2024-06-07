import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../AuthActions';
import { AuthSliceState } from './types';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const initialState: AuthSliceState = {
  isLoading: false,
  user: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: state => {
      GoogleSignin.signOut();
      state.isLoading = false;
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(registerUser.rejected, state => {
      state.isLoading = false;
    });

    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(loginUser.rejected, state => {
      state.isLoading = false;
    });
  },
});

export default AuthSlice;
export const { logoutUser } = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
