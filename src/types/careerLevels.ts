import { IEmploymentType } from './employmentTypes';

export interface ICareerLevel {
  id: number;
  level: string;
}
export interface ICareerLevelMap {
  [id: number]: ICareerLevel;
}
