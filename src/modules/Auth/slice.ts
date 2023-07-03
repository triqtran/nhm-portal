import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, LogInRequest } from './type';
import { AppThunk } from 'reduxStore/store';
import apis from './apis';
import { authStorage } from 'utils/localStorage';
import errors from 'constants/errors';

const initialState: AuthState = {
  auth: null,
  token: null,
  authenticating: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<Partial<AuthState>>) => {
      state.authenticating = false;
      state.auth = action.payload.auth || null;
      state.token = action.payload.token || null;
      state.error = action.payload.error || null;
    },
    removeAuth: state => {
      state.authenticating = false;
      state.auth = null;
      state.token = null;
      authStorage.remove();
    },
    startAuth: state => {
      state.authenticating = true;
      state.auth = null;
      state.token = null;
      state.error = null;
    },
  },
});

const { updateAuth, removeAuth, startAuth } = authSlice.actions;

export const getProfile = (): AppThunk => dispatch => {
  dispatch(startAuth());
  return apis
    .getProfile()
    .then(res => {
      dispatch(
        updateAuth({
          auth: res.data,
          token: authStorage.get(),
        })
      );
    })
    .catch(err => {
      dispatch(
        updateAuth({
          error: err.error.show || errors.LOGIN_FAIL,
        })
      );
    });
};

export const login =
  (data: LogInRequest): AppThunk =>
  dispatch => {
    dispatch(startAuth());
    return apis
      .login(data)
      .then(res => {
        authStorage.set(res.token);
        dispatch(
          updateAuth({
            auth: res.data,
            token: res.token,
          })
        );
      })
      .catch(err => {
        dispatch(
          updateAuth({
            error: err.error.show || errors.LOGIN_FAIL,
          })
        );
      });
  };

export const logout = (): AppThunk => dispatch => {
  dispatch(removeAuth());
};

export default authSlice.reducer;
