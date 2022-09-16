import axios from 'axios';
import { AppDispatch, RootState } from '../index';
import { appDoneLoading, appLoading } from '../appState/slice';
import { apiError } from '../../helpers/apiError';
import { apiUrl } from '../../config/constants';
import { setJobs } from './slice';

export const fetchCandidateJobs = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { token } = getState().user;
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/candidates/applications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setJobs(response.data.jobs));
    dispatch(appDoneLoading());
  } catch (e) {
    apiError(dispatch, e);
    dispatch(appDoneLoading());
  }
};
