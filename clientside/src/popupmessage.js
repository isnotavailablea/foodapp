import React from "react";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import {setmessage} from "./redux/message";
import { useDispatch } from "react-redux";
import "./css/message.css";
function Popupmessage() {
  const { showmessage, messageis } = useSelector(
    (state) => state.message.value
  );
  const dispatch=useDispatch()
  const [something,otherthing]=useState("somethingelse")
  const shutitoff=setTimeout(()=>{
    dispatch(setmessage({showmessage:false,messageis:"go fuck yourself"}))
},3000)    
  return (
    <>
      <div className="message-container">
        <div className="main-message">{messageis}</div>
      </div>
      
    </>
  );
}

export default Popupmessage;
