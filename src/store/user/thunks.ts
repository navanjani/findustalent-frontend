import axios from 'axios';
import { apiUrl } from '../../config/constants';
import { selectToken } from './selectors';
import { appLoading, appDoneLoading } from '../appState/slice';
import { showMessageWithTimeout } from '../appState/thunks';
import { loginSuccess, logOut, tokenStillValid } from './slice';
import { AppDispatch, RootState } from '../index';
import { apiError } from '../../helpers/apiError';
import { setCompany } from '../company/slice';
import { IProfile } from '../../types/profile';

export const signUp = (user: IProfile) => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.post(`${apiUrl}/auth/signup`, user);
    dispatch(loginSuccess({ token: response.data.token, user: response.data.user }));
    dispatch(showMessageWithTimeout('success', true, 'account created'));
    dispatch(appDoneLoading());
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });

    dispatch(loginSuccess({ token: response.data.token, user: response.data.user }));
    dispatch(showMessageWithTimeout('success', false, 'welcome back!', 1500));
    dispatch(appDoneLoading());
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const getUserWithStoredToken = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  // get token from the state
  const token = selectToken(getState());

  // if we have no token, stop
  if (token === null) {
    return;
  }

  dispatch(appLoading());
  try {
    // if we do have a token,
    // check wether it is still valid or if it is expired
    const response = await axios.get(`${apiUrl}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // token is still valid
    dispatch(tokenStillValid({ user: response.data.user }));
    dispatch(setCompany(response.data.company));
    dispatch(appDoneLoading());
  } catch (error: any) {
    apiError(dispatch, error);
    // if we get a 4xx or 5xx response,
    // get rid of the token by logging out
    dispatch(logOut());
    dispatch(appDoneLoading());
  }
};
