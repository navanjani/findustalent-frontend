import { createSlice } from '@reduxjs/toolkit';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';

interface IDepartments {
  id: number;
  name: string;
}

interface ICompanies {
  departments: IDepartments[];
  jobs: IJob[];
  company: ICompany | null;
}
const initialState: ICompanies = {
  departments: [],
  jobs: [],
  company: null,
};
export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    // addNewJob: (state, action) => {
    //   state.jobs.push(action.payload);
    // },
  },
});
export const { setDepartments, setJobs, setCompany } = companySlice.actions;
export default companySlice.reducer;
