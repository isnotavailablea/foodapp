import React from "react";
import Login from "./login";
import Signup from "./signup";
import { useSelector } from "react-redux";
function Index(){
    const {loggedin,loggedas,as,actionis}=useSelector((state)=>state.log.value)
    if(actionis==="login"){
        return <Login/>
    }
    else if(actionis==="signup"){
        return <Signup/>
    }
    else{
        return <>
        <h1>
            some error occured
        </h1>
        </>
    }
}
export default Index