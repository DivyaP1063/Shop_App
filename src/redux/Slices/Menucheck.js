import { createSlice } from "@reduxjs/toolkit";


export const Menucheck= createSlice({
    name:"sidebar",
    initialState: false,
    reducers:{
        change: (state) => {
            return !state;
          },

    }
})

export const {change} = Menucheck.actions;
export default Menucheck.reducer;