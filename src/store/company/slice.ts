import { createSlice } from '@reduxjs/toolkit';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';
import { IDepartment } from '../../types/departments';
import { IJobCandidate } from '../../types/jobCandidates';
import { IIndustry } from '../../types/industries';
import { IApplicationStatuses } from '../../types/applicationStatuses';

interface ICompanies {
  departments: IDepartment[];
  jobs: IJob[];
  candidates: IJobCandidate[];
  candidate: IJobCandidate | null;
  company: ICompany | null;
  industries: IIndustry[];
}
const initialState: ICompanies = {
  departments: [],
  jobs: [],
  candidates: [],
  candidate: null,
  company: null,
  industries: [],
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
    setIndustries: (state, action) => {
      state.industries = action.payload;
    },
    setCandidate: (state, action) => {
      state.candidate = action.payload;
    },

    // addNewJob: (state, action) => {
    //   state.jobs.push(action.payload);
    // },
  },
});
export const { setDepartments, setJobs, setCompany, setCandidates, setIndustries, setCandidate } =
  companySlice.actions;
export default companySlice.reducer;
