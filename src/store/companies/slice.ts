import { createSlice } from '@reduxjs/toolkit';

interface IEmploymentType {
  id: number;
  type: string;
}
interface ICareerLevel {
  id: number;
  level: string;
}
interface IDepartments {
  id: number;
  name: string;
}
interface ICompanies {
  employmentTypes: IEmploymentType[];
  careerLevels: ICareerLevel[];
  departments: IDepartments[];
}

const initialState: ICompanies = {
  employmentTypes: [],
  careerLevels: [],
  departments: [],
};
export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setEmploymentTypes: (state, action) => {
      state.employmentTypes = action.payload;
    },
    setCareerLevels: (state, action) => {
      state.careerLevels = action.payload;
    },
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
  },
});
export const { setEmploymentTypes, setCareerLevels, setDepartments } = companiesSlice.actions;
export default companiesSlice.reducer;
