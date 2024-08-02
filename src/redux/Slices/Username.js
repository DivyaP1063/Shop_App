import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Name: '',
};

const Username = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.Name = action.payload;
    },
  },
});

export const {
  setUserName,
} = Username.actions;

export default Username.reducer;