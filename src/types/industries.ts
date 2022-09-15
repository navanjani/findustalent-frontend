import { IEmploymentType } from './employmentTypes';

export interface IIndustry {
  id: number;
  industry: string;
}

export interface IIndustryMap {
  [id: number]: IIndustry;
}
