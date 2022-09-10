export interface IEmploymentType {
  id: number;
  type: string;
}

export interface IEmploymentTypeMap {
  [id: number]: IEmploymentType;
}
