import axios from 'axios';
import { AppDispatch, RootState } from '../index';
import { appDoneLoading, appLoading } from '../appState/slice';
import { setCandidates, setCompany, setDepartments, setIndustries, setJobs } from './slice';
import { apiError } from '../../helpers/apiError';
import { IJob } from '../../types/jobs';
import { apiUrl } from '../../config/constants';
import { ICreateCompany } from '../../types/companies';

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

export const fetchCompanyJobs = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(appLoading());
    const { token, profile } = getState().user;
    const response = await axios.get(`${apiUrl}/companies/${profile?.companyId}/jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setJobs(response.data.jobs));
  } catch (e) {
    apiError(dispatch, e);
    dispatch(appDoneLoading());
  }
};

export const fetchCompanyCandidates = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(appLoading());
    const { token, profile } = getState().user;
    const response = await axios.get(`${apiUrl}/companies/${profile?.companyId}/candidates`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setCandidates(response.data.candidates));
  } catch (e) {
    apiError(dispatch, e);
    dispatch(appDoneLoading());
  }
};
export const fetchIndustries = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/companies/industries`);
    dispatch(setIndustries(response.data.industries));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const createCompany =
  (newCompany: ICreateCompany) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(appLoading());
    try {
      const { token } = getState().user;
      const response = await axios.post(`${apiUrl}/companies`, newCompany, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setCompany(response.data.company));
      dispatch(appDoneLoading());
    } catch (error: any) {
      apiError(dispatch, error);
      dispatch(appDoneLoading());
    }
  };
