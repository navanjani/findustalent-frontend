import { RootState } from '../index';

export const selectPublicCompany = (reduxState: RootState) => reduxState.public.company;
export const selectPublicJobs = (reduxState: RootState) => reduxState.public.jobs;
export const selectPublicCurrentJob = (reduxState: RootState) => reduxState.public.job;
