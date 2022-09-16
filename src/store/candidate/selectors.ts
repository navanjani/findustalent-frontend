import { RootState } from '../index';

export const selectCandidateJobs = (reduxState: RootState) => reduxState.candidate.jobs;
