import axis from '@src/configs/axis';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

// Thunk untuk login
export const login = createAsyncThunk(
  'appSlice/login',
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axis.post('/auth/login', {
        username,
        password,
      });

      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data || 'Login failed');
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    }
  }
);

// Slice untuk state aplikasi
export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    userData: {
      id: '',
      fullName: '',
      username: '',
      authToken: '',
    },
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload.data;

      localStorage.setItem('authToken', action.payload.data.authToken);
      localStorage.setItem('userData', JSON.stringify(action.payload.data));
    });
  },
});

export default appSlice.reducer;
