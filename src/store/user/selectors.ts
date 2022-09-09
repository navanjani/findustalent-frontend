import { RootState } from '../index';

export const selectToken = (reduxState: RootState) => reduxState.user.token;
export const selectUser = (reduxState: RootState) => reduxState.user.profile;
