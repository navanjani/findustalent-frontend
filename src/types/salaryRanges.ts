export interface ISalaryRange {
  id: number;
  range: string;
}

export interface ISalaryRangesMap {
  [id: number]: ISalaryRange;
}
