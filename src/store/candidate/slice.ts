import { createSlice } from '@reduxjs/toolkit';
import { IJobCandidate } from '../../types/jobCandidates';

interface ICandidates {
  jobs: IJobCandidate[];
}
const initialState: ICandidates = {
  jobs: [],
};

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = candidateSlice.actions;
export default candidateSlice.reducer;
