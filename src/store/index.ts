import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import appStateReducer from './appState/slice';
import userReducer from './user/slice';
import companiesReducer from './companies/slice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    companies: companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
