import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} = userSlice.actions;

export default userSlice.reducer;