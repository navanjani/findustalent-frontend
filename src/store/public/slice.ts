import { createSlice } from '@reduxjs/toolkit';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';

interface IPublic {
  jobs: IJob[];
  job: IJob | null;
  company: ICompany | null;
}
const initialState: IPublic = {
  jobs: [],
  job: null,
  company: null,
};
export const publicSlice = createSlice({
  name: 'public',
  initialState,
  reducers: {
    setPublicJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setPublicCompany: (state, action) => {
      state.company = action.payload;
    },
    setCurrentJob: (state, action) => {
      state.job = action.payload;
    },
  },
});
export const { setPublicJobs, setPublicCompany, setCurrentJob } = publicSlice.actions;
export default publicSlice.reducer;
