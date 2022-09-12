import axios from 'axios';
import { AppDispatch } from '../index';
import { apiUrl } from '../../config/constants';
import { setPublicCompany, setPublicJobs } from './slice';
import { apiError } from '../../helpers/apiError';
import { appDoneLoading, appLoading } from '../appState/slice';

export const fetchCompanyPublicData = (companySlug: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/companies/${companySlug}`);
    dispatch(setPublicCompany(response.data.company));
    dispatch(appDoneLoading());
  } catch (e) {
    apiError(dispatch, e);
    dispatch(appDoneLoading());
  }
};

export const fetchCompanyPublicJobs = (companySlug: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/companies/${companySlug}/jobs`);
    dispatch(setPublicJobs(response.data.jobs));
    dispatch(appDoneLoading());
  } catch (e) {
    apiError(dispatch, e);
    dispatch(appDoneLoading());
  }
};
