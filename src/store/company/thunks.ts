import axios from 'axios';
import { apiUrl } from '../../config/constants';
import { AppDispatch, RootState } from '../index';
import { appDoneLoading, appLoading } from '../appState/slice';
import { setDepartments, setJobs } from './slice';
import { apiError } from '../../helpers/apiError';
import { IJob } from '../../types/jobs';

export const fetchCompanyDepartments = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(appLoading());
  try {
    const { token, profile } = getState().user;

    const response = await axios.get(`${apiUrl}/companies/${profile?.companyId}/departments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setDepartments(response.data.departments));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const createNewJob = (newJob: IJob) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(appLoading());
    const { token, profile } = getState().user;
    const response = await axios.post(`${apiUrl}/companies/${profile?.companyId}/jobs`, newJob, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setJobs(response.data.jobs));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

// export const fetchFormFieldData = () => async (dispatch: AppDispatch, getState: () => RootState) => {};
