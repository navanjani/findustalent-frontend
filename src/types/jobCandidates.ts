import { IJob } from './jobs';

export interface IJobCandidateStatuses {
  id: number;
  status: number;
  createdAt: string;
}

export interface IJobCandidate {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  cv: string;
  linkedinUrl: string;
  phoneNumber: string;
  coverLetter: string;
  job?: IJob;
  createdAt?: string;
  jobCandidateStatuses?: IJobCandidateStatuses[];
}
