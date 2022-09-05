import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  message: null,
  showClientNavBar: true,
  bodyColor: '#FFFFFF',
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    appLoading: (state) => {
      state.loading = true;
    },
    appDoneLoading: (state) => {
      state.loading = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    setShowClientNavBar: (state, action) => {
      state.showClientNavBar = action.payload;
    },
    setBodyColorLightBlue: (state) => {
      state.bodyColor = 'var(--pxpMainColorLight)';
    },
    setBodyColorWhite: (state) => {
      state.bodyColor = '#FFFFFF';
    },
  },
});

export const {
  appLoading,
  appDoneLoading,
  setMessage,
  clearMessage,
  setShowClientNavBar,
  setBodyColorLightBlue,
  setBodyColorWhite,
} = appStateSlice.actions;

export default appStateSlice.reducer;
