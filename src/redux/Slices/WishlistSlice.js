import { createSlice } from "@reduxjs/toolkit";


export const WishSlice= createSlice({
    name:"wish",
    initialState: [],
    reducers:{
        addW:(state,action)=>{
            state.push(action.payload);
        },
        removeW:(state,action)=>{
            return state.filter((post)=>post.id!==action.payload);
        }
    }
})

export const {addW,removeW} = WishSlice.actions;
export default WishSlice.reducer;