import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import appStateReducer from './appState/slice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
