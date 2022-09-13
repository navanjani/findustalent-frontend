import { ICategory } from './categories';
import { IDepartment } from './departments';

export interface IJob {
  id?: number;
  slug?: string;
  title: string;
  location: string;
  categoryId: number;
  description: string;
  careerLevel: number;
  employmentType: number;
  salaryRange: number;
  departmentId: number;
  closingDate: string;
  createdAt?: string;
  updatedAt?: string;
  category?: ICategory;
  department?: IDepartment;
}
