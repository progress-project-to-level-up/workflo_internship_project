import React, { useRef } from "react";
import "../login/login.css";
import loginPhoto from "../login/loginPhoto.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    const authDetails = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const apiResponse = await axios.post(
        "http://localhost:8080/login",
        authDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-sign">
      <div className="form-cont">
        <div className="form-img">
          <img src={loginPhoto} alt="" />
        </div>
        <div className="form-main">
          <div className="form-header">
            <h3>Welcom Back,</h3>
            <p>Please login to continue ..</p>
          </div>
          <form action="" className="form-frm">
            <div className="frm-sign-inputs">
              <div className="frm-sign-ctrl">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="frm-sign-ctrl">
                <input type="password" placeholder="Password"/>
              </div>
            </div>
            <div className="frm-pwd-crd">
              <div className="frm-pwd-ctrl">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
              <div className="frm-forget">
                <span>Forgot Password ?</span>
              </div>
            </div>
            <div className="frm-btn">
              <button>Sign in</button>
            </div>
            <div className="frm-already">
              <span>Don't have an account ?</span>
              <Link to='/signup'>Signup here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
