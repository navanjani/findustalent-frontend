import { RootState } from '../index';

export const selectEmploymentTypes = (reduxState: RootState) => reduxState.companies.employmentTypes;
export const selectCareerLevels = (reduxState: RootState) => reduxState.companies.careerLevels;
export const selectDepartments = (reduxState: RootState) => reduxState.companies.departments;
