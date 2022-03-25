import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {showmessage:false,messageis:"This is the default message that is to be displayed in absence of the actual message." };
const messageslice=createSlice({
    name:"message",
    initialState:{value:initialStateValue},
    reducers:{
       setmessage:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const {setmessage}=messageslice.actions;
export default messageslice.reducer;