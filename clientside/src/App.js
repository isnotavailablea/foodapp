import React from 'react'
import { useSelector } from "react-redux";
import Index from "./login/index"

function App() {
  const {loggedin,loggedas,as,actionis}=useSelector((state)=>state.log.value)
  if(!loggedin){
    console.log(Boolean(loggedin))
    return <Index/>
  }
  else if(loggedin && loggedas==="hotel"){
    return<>
    welcome to my hotel
    </>
  }
  else if (loggedin && loggedas==="user"){
    return <>
    welcome coustomer
    </>
  }
}

export default App;
