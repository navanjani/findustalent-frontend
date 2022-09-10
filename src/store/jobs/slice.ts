import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from '../../types/categories';
import { IEmploymentType } from '../../types/employmentTypes';

interface ICareerLevel {
  id: number;
  level: string;
}
interface ISalaryRanges {
  id: number;
  range: string;
}

interface ICompanies {
  employmentTypes: IEmploymentType[];
  careerLevels: ICareerLevel[];
  salaryRanges: ISalaryRanges[];
  categories: ICategory[];
}

const initialState: ICompanies = {
  employmentTypes: [],
  careerLevels: [],
  salaryRanges: [],
  categories: [],
};
export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setEmploymentTypes: (state, action) => {
      state.employmentTypes = action.payload;
    },
    setCareerLevels: (state, action) => {
      state.careerLevels = action.payload;
    },
    setSalaryRanges: (state, action) => {
      state.salaryRanges = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export const { setEmploymentTypes, setCareerLevels, setSalaryRanges, setCategories } = jobsSlice.actions;
export default jobsSlice.reducer;
