import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../API/axiosClient';
import { User } from '../AuthSlice';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (req, { rejectWithValue }) => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleUserData = await GoogleSignin.signIn();

      const response = await axiosClient.post<User>('/users/google', {
        token: googleUserData.idToken,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (req, { rejectWithValue }) => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleUserData = await GoogleSignin.signIn();

      const response = await axiosClient.post<User>('/users/google', {
        token: googleUserData.idToken,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
