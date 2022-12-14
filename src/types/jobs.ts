import { ICategory } from './categories';
import { IDepartment } from './departments';
import { ICompany } from './companies';
import { IJobCandidate } from './jobCandidates';

export interface IBaseJob {
  id?: number;
  slug?: string;
  title: string;
  location: string;
  categoryId: number;
  careerLevel: number;
  employmentType: number;
  departmentId: number;
  createdAt?: string;
  company?: ICompany;
}

export interface IJob extends IBaseJob {
  description: string;
  salaryRange: number;
  closingDate: string;
  updatedAt?: string;
  category?: ICategory;
  department?: IDepartment;
  jobCandidates?: IJobCandidate[];
}
