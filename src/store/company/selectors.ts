import { RootState } from '../index';

export const selectDepartments = (reduxState: RootState) => reduxState.company.departments;
export const selectUserCompany = (reduxState: RootState) => reduxState.company.company;
export const selectCompanyJobs = (reduxState: RootState) => reduxState.company.jobs;
export const selectCompanyCandidates = (reduxState: RootState) => reduxState.company.candidates;
export const selectIndustries = (reduxState: RootState) => reduxState.company.industries;
