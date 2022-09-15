import { ICareerLevel } from './careerLevels';

export interface IApplicationStatuses {
  id: number;
  status: string;
}

export interface IApplicationStatusesMap {
  [id: number]: IApplicationStatuses;
}
