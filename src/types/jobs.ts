export interface IJob {
  id?: number;
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
}
