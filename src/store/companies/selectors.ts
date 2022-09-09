import { RootState } from '../index';

export const selectDepartments = (reduxState: RootState) => reduxState.companies.departments;
