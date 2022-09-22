import { IJobCandidateStatuses } from '../types/jobCandidateStatuses';

export const getLatestJobStatusForApplication = (statuses: IJobCandidateStatuses[]): IJobCandidateStatuses =>
  statuses.reduce((previous, current) => (previous.createdAt > current.createdAt ? previous : current));
