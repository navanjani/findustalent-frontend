import { RootState } from '../index';

export const selectEmploymentTypes = (reduxState: RootState) => reduxState.jobs.employmentTypes;
export const selectCareerLevels = (reduxState: RootState) => reduxState.jobs.careerLevels;
export const selectSalaryRanges = (reduxState: RootState) => reduxState.jobs.salaryRanges;
export const selectCategories = (reduxState: RootState) => reduxState.jobs.categories;
