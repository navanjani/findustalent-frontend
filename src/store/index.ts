import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import appStateReducer from './appState/slice';
import userReducer from './user/slice';
import companyReducer from './company/slice';
import jobsReducer from './jobs/slice';
import publicReducer from './public/slice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    company: companyReducer,
    jobs: jobsReducer,
    public: publicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
