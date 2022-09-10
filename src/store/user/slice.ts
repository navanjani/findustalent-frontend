import { createSlice } from '@reduxjs/toolkit';

interface IProfile {
  userType: number;
  firstName: string;
  lastName: string;
  companyId: number;
}

interface IUser {
  token: string | null;
  profile: IProfile | null;
}

const initialState: IUser = {
  token: localStorage.getItem('token'),
  profile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;
