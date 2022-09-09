import { createSlice } from '@reduxjs/toolkit';

interface IDepartments {
  id: number;
  name: string;
}
interface ICompanies {
  departments: IDepartments[];
}
interface IJobs {}

const initialState: ICompanies = {
  departments: [],
  jobs: [],
};
export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
  },
});
export const { setDepartments } = companiesSlice.actions;
export default companiesSlice.reducer;
