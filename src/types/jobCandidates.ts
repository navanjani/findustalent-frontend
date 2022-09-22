import { IBaseJob } from './jobs';
import { IJobCandidateStatuses } from './jobCandidateStatuses';

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
