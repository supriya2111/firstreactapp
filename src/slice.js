import { createSlice } from "@reduxjs/toolkit"
export const loggedslice=createSlice({
    name: 'counter',
    initialState:{
        count:0,
    },
    reducers:{
        Increment:(state)=>{state.count++},

        Decrement:(state)=>{state.count--},
    }
})
export const {Increment} =loggedslice.actions;
export const {Decrement} =loggedslice.actions;
export default loggedslice.reducer;