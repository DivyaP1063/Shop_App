import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Name: '',
  email: '',
  password: '',
  isLoggedin: false,
};

const Olduser = createSlice({
  name: 'olduser',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state) => {
      state.isLoggedin = true;
    },
    resetFields: (state) => {
      state.Name = '';
      state.email = '';
      state.password = '';
    }
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  login,
  resetFields
} = Olduser.actions;

export default Olduser.reducer;