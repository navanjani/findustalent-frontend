import { createSlice } from '@reduxjs/toolkit';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';
import { IDepartment } from '../../types/departments';
import { IJobCandidate } from '../../types/jobCandidates';

interface ICompanies {
  departments: IDepartment[];
  jobs: IJob[];
  candidates: IJobCandidate[];
  company: ICompany | null;
}
const initialState: ICompanies = {
  departments: [],
  jobs: [],
  candidates: [],
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
    setCandidates: (state, action) => {
      state.candidates = action.payload;
    },
    // addNewJob: (state, action) => {
    //   state.jobs.push(action.payload);
    // },
  },
});
export const { setDepartments, setJobs, setCompany, setCandidates } = companySlice.actions;
export default companySlice.reducer;
