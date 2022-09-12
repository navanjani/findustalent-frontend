import _ from 'lodash';
import { RootState } from '../index';

export const selectEmploymentTypes = (reduxState: RootState) => reduxState.jobs.employmentTypes;
export const selectCareerLevels = (reduxState: RootState) => reduxState.jobs.careerLevels;
export const selectSalaryRanges = (reduxState: RootState) => reduxState.jobs.salaryRanges;
export const selectCategories = (reduxState: RootState) => reduxState.jobs.categories;

// https://stackoverflow.com/a/37642350
export const selectCategoriesAsObject: any = (reduxState: RootState) =>
  _.keyBy(reduxState.jobs.categories, 'id');
/* eslint no-confusing-arrow:0 */
export const selectEmploymentTypesAsObject: any = (reduxState: RootState) =>
  reduxState.jobs.employmentTypes ? _.keyBy(reduxState.jobs.employmentTypes, 'id') : null;
