import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import appStateReducer from './appState/slice';
import userReducer from './user/slice';
import companyReducer from './company/slice';
import jobsReducer from './jobs/slice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    company: companyReducer,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
