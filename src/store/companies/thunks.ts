import axios from 'axios';
import { apiUrl } from '../../config/constants';
import { AppDispatch, RootState } from '../index';
import { appDoneLoading, appLoading } from '../appState/slice';
import { setCareerLevels, setEmploymentTypes, setDepartments } from './slice';
import { apiError } from '../../helpers/apiError';

export const fetchEmploymentTypes = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/companies/employment-types`);
    dispatch(setEmploymentTypes(response.data.types));
    dispatch(appDoneLoading());
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const fetchCareerLevels = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/companies/career-levels`);
    dispatch(setCareerLevels(response.data.levels));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

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

// export const fetchFormFieldData = () => async (dispatch: AppDispatch, getState: () => RootState) => {};
