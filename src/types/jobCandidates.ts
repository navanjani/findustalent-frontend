import { IBaseJob } from './jobs';
import { ICompany } from './companies';

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
  job?: IBaseJob;
  createdAt?: string;
  jobCandidateStatuses?: IJobCandidateStatuses[];
}
