import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/logininfo";
import "../css/signup.css";
import { forChangesin } from "../extrafuncs/changeloginpath";
function Signup() {
  const { loggedin, loggedas, as, actionis } = useSelector(
    (state) => state.log.value
  );
  const [changepasscode, setChangepasscode] = useState(["password", "show"]);
  const dispatch = useDispatch();
  const showhide = () => {
    if (changepasscode[0] === "text") {
      return setChangepasscode(["password", "show"]);
    } else {
      return setChangepasscode(["text", "hide"]);
    }
  };
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
    <div className="container">
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
  );
}

export default Signup;
