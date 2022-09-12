import { createSlice } from '@reduxjs/toolkit';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';

interface IPublic {
  jobs: IJob[];
  company: ICompany | null;
}
const initialState: IPublic = {
  jobs: [],
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
  },
});
export const { setPublicJobs, setPublicCompany } = publicSlice.actions;
export default publicSlice.reducer;
