import axios from 'axios';
import { AppDispatch } from '../index';
import { appDoneLoading, appLoading } from '../appState/slice';

import { apiUrl } from '../../config/constants';
import {
  setApplicationStatuses,
  setCareerLevels,
  setCategories,
  setEmploymentTypes,
  setSalaryRanges,
} from './slice';
import { apiError } from '../../helpers/apiError';

export const fetchEmploymentTypes = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/jobs/employment-types`);
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
    const response = await axios.get(`${apiUrl}/jobs/career-levels`);
    dispatch(setCareerLevels(response.data.levels));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const fetchSalaryRanges = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/jobs/salary-ranges`);
    dispatch(setSalaryRanges(response.data.ranges));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/jobs/categories`);
    dispatch(setCategories(response.data.categories));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};

export const fetchApplicationStatuses = () => async (dispatch: AppDispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/jobs/stasuses`);
    console.log(response.data.statuses);
    dispatch(setApplicationStatuses(response.data.statuses));
  } catch (error: any) {
    apiError(dispatch, error);
    dispatch(appDoneLoading());
  }
};
