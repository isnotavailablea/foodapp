import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/logininfo";
import { setmessage } from "../redux/message";
import { forChangesin } from "../extrafuncs/changeloginpath";
import Popupmessage from "../popupmessage";
function Signup() {
  const { loggedin, loggedas, as, actionis } = useSelector(
    (state) => state.log.value
  );
  const {showmessage,messageis}=useSelector((state)=>state.message.value)
  const [otpAccess,setOtpAccess]=useState(["flex","none"]);
  const [settimer, setSettimer] = useState(180);
  const [changepasscode, setChangepasscode] = useState(["password", "show"]);
  const dispatch = useDispatch();
  const showhide = () => {
    if (changepasscode[0] === "text") {
      return setChangepasscode(["password", "show"]);
    } else {
      return setChangepasscode(["text", "hide"]);
    }
  };
  const changeTime=useEffect(() => {
    if(settimer===0){
      return
    }
    else{
      return setTimeout(()=>{
     setSettimer(settimer-1)
      },1000)
    }
  }, [settimer])
  
  const alernateroute = () => {
    if (as === "user") {
      return "hotel";
    } else {
      return "user";
    }
  };

  const rediculous = (obj) => {
    dispatch(login(obj));
    return;
  };
  return (
    <>
      <div className="container" style={{ display: otpAccess[1] }}>
        <div className="title">
          <div className="companyname">Foodie-101</div>
          <div className="main-heading">
            <h2>{`${as}`}</h2>
            <h1>{`${actionis}`}</h1>
          </div>
        </div>
        <div className="form">
          <div>
            <label htmlFor="email" className="lbl">
              Enter your email
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="someone@something.com"
              autoComplete="off"
            />
            <label htmlFor="password" className="lbl">
              Password
            </label>
            <input
              type={`${changepasscode[0]}`}
              name="password"
              required
              minLength={4}
              maxLength={12}
              placeholder="enter your passcode here"
            />
            <button
              className="eye"
              onClick={showhide}
            >{`${changepasscode[1]}`}</button>
            <label htmlFor="confirmpassword" className="lbl">
              Confirm Password
            </label>
            <input
              type={`${changepasscode[0]}`}
              name="confirmpassword"
              required
              minLength={4}
              maxLength={12}
              placeholder="confirm passcode here"
            />
            <button
              className="eye"
              onClick={showhide}
            >{`${changepasscode[1]}`}</button>
            <div className="Login">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Signup
              </button>
            </div>
            <div className="links" id="mobiledisappear">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  rediculous(
                    forChangesin(
                      { loggedin, loggedas, as, actionis },
                      ["actionis"],
                      ["login"]
                    )
                  );
                }}
              >
                Login instead?
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  rediculous(
                    forChangesin(
                      { loggedin, loggedas, as, actionis },
                      ["as"],
                      [`${alernateroute()}`]
                    )
                  );
                }}
              >
                Signup as {`${alernateroute()}`}?
              </a>
            </div>
            <div className="links" id="computer-disappear">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  rediculous(
                    forChangesin(
                      { loggedin, loggedas, as, actionis },
                      ["actionis"],
                      ["login"]
                    )
                  );
                }}
              >
                Login instead?
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  rediculous(
                    forChangesin(
                      { loggedin, loggedas, as, actionis },
                      ["as"],
                      [`${alernateroute()}`]
                    )
                  );
                }}
              >
                Signup as {`${alernateroute()}`}?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="otp-container" style={{display:otpAccess[0]}}>
        <div className="otp-title">foodie101</div>
        <div className="otp-form">
          <label htmlFor="otp-input">Enter the otp:</label>
          <input
            type="text"
            name="otp-input"
            title="Enter your one time password here"
            placeholder="Enter your otp "
          />
          <div className="otp-resend">
            <button>resend otp</button>
          </div>
          <div className="otp-submit">
            <button onClick={(e)=>{
            }}>Submit</button>
          </div>
        </div>
        <div className="otp-timer" >
          {settimer}
        </div>
      </div>
     {showmessage && <Popupmessage/>}
    </>
  );
}



export default Signup;
