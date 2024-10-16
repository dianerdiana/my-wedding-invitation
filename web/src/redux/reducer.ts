import axis from '@src/configs/axis';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { getUserData } from '@src/utils/Utils';

const initialUserData = getUserData();

// Thunk untuk login
export const login = createAsyncThunk(
  'appSlice/login',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
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

export const getAllGuestList = createAsyncThunk('appSlice/getAllGuestList', async () => {
  try {
    const response = await axis.get('/guests/list');

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
});

export const createGuestList = createAsyncThunk(
  'appSlice/createGuestList',
  async (data: any[], { rejectWithValue, dispatch }) => {
    try {
      const response = await axis.post('/guests/create', { data });
      await dispatch(getAllGuestList());

      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data || 'Gagal');
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    }
  }
);

export const updateGuestList = createAsyncThunk(
  'appSlice/updateGuestList',
  async (data: { id: number; status: string }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axis.patch(`/guests/update/${data.id}`, {
        status: data.status,
        id: data.id,
      });
      await dispatch(getAllGuestList());

      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data || 'Gagal');
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    }
  }
);

export const deleteGuestList = createAsyncThunk(
  'appSlice/deleteGuestList',
  async (guestListId: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await axis.delete(`/guests/delete/${guestListId}`);
      await dispatch(getAllGuestList());

      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Gagal');
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    }
  }
);

export const getAllReservations = createAsyncThunk('appSlice/getAllReservations', async () => {
  try {
    const response = await axis.get('/reservations/list');

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
});

export const createReservation = createAsyncThunk(
  'appSlice/createReservation',
  async (
    {
      name,
      message,
      attendanceStatus,
    }: {
      name: string;
      message: string;
      attendanceStatus: string;
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axis.post('/reservations/create', { name, message, attendanceStatus });
      await dispatch(getAllReservations());

      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data || 'Gagal');
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
    userData: initialUserData,
    guestList: {
      data: [],
    },
    reservation: {
      data: [],
    },
  },
  reducers: {
    logout: () => {
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userData = action.payload.data;

      localStorage.setItem('authToken', action.payload.data.authToken);
      localStorage.setItem('userData', JSON.stringify(action.payload.data));
    });
    builder.addCase(getAllGuestList.fulfilled, (state, action) => {
      state.guestList.data = action.payload.data;
    });
    builder.addCase(getAllReservations.fulfilled, (state, action) => {
      state.reservation.data = action.payload.data;
    });
  },
});

export default appSlice.reducer;
