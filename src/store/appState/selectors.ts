import { RootState } from '../index';

export const selectAppLoading = (reduxState: RootState) => reduxState.appState.loading;
export const selectMessage = (reduxState: RootState) => reduxState.appState.message;
export const selectShowClientNavBar = (reduxState: RootState) => reduxState.appState.showClientNavBar;
export const selectBodyColor = (reduxState: RootState) => reduxState.appState.bodyColor;
export const selectLightPage = (reduxState: RootState) => reduxState.appState.lightPage;
