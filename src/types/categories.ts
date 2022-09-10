export interface ICategory {
  id: number;
  name: string;
}

export interface ICategoryMap {
  [id: number]: ICategory;
}
