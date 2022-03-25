import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {loggedin: false,loggedas:"dummy",as:"user",actionis:"login" };
const loggedinslice=createSlice({
    name:"log",
    initialState:{value:initialStateValue},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state,action)=>{
            state.value=initialStateValue
        }
    }
})
export const {login,logout}=loggedinslice.actions;
export default loggedinslice.reducer;