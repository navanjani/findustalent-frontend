import _ from 'lodash';
import { RootState } from '../index';

export const selectDepartments = (reduxState: RootState) => reduxState.company.departments;
export const selectUserCompany = (reduxState: RootState) => reduxState.company.company;
export const selectCompanyJobs = (reduxState: RootState) => reduxState.company.jobs;
export const selectCompanyCandidates = (reduxState: RootState) => reduxState.company.candidates;
export const selectIndustries = (reduxState: RootState) => reduxState.company.industries;
export const selectCandidate = (reduxState: RootState) => reduxState.company.candidate;
export const selectJobCandidateStatuses = (reduxState: RootState) => reduxState.company.jobCandidateStatuses;

/* eslint no-confusing-arrow:0 */
export const selectIndustriesAsObject: any = (reduxState: RootState) =>
  reduxState.company.industries.length ? _.keyBy(reduxState.company.industries, 'id') : null;
