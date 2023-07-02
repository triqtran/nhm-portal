import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, LogInRequest } from './type';
import { AppThunk } from 'reduxStore/store';
import apis from './apis';
import { authStorage } from 'utils/localStorage';

const initialState: AuthState = {
  auth: null,
  token: null,
  authenticating: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<AuthState>) => {
      state.auth = action.payload.auth;
      state.token = action.payload.token;
    },
    removeAuth: state => {
      state.authenticating = false;
      state.auth = null;
      state.token = null;
      authStorage.remove();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending || getProfile.pending, state => {
        state.authenticating = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authenticating = false;
        state.token = action.payload.token;
        state.auth = action.payload.data;
        if (state.token) {
          authStorage.set(state.token);
        }
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.authenticating = false;
        state.token = authStorage.get();
        state.auth = action.payload.data;
      })
      .addCase(login.rejected || getProfile.rejected, state => {
        state.authenticating = false;
      });
  },
});

const { removeAuth } = authSlice.actions;

export const login = createAsyncThunk(
  'auth/login',
  async (data: LogInRequest) => {
    const response = await apis.login(data);
    return response;
  }
);

export const getProfile = createAsyncThunk('/auth/profile', async () => {
  const response = await apis.getProfile();
  return response;
});

export const logout = (): AppThunk => dispatch => {
  dispatch(removeAuth());
};

export default authSlice.reducer;
