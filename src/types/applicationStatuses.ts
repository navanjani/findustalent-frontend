export interface IApplicationStatuses {
  id: number;
  status: string;
  createdAt: string;
}

export interface IApplicationStatusesMap {
  [id: number]: IApplicationStatuses;
}
