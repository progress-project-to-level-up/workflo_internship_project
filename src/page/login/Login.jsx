import React, { useRef } from "react";
import "../login/login.css";

import Button from "../../component/buttons/Button";
import loginPhoto from "../login/loginPhoto.svg";
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
    <div className="login-container">
      <div className="log-container">
        <div className="image2-container">
          <img src={loginPhoto} alt="image2" className="image2" />
        </div>

        <div className="text-container">
          <h1 className="title-text">Welcome Back,</h1>
          <p className="sub-text">Please login to continue ..</p>

          <form onSubmit={handleLogin}>
            <div className="loginInput-form">
              <div>
                <input type="text" placeholder="Email" ref={email} rereeddd />
              </div>
              <div>
                <input type="text" placeholder="Password" ref={password} />
              </div>
            </div>
            <div className="check-flex">
              <input type="checkbox" className="check" />
              <div className="forget">Remember me</div>
              <div className="forget">Forgot password?</div>
            </div>
            <div className="btn-flex">
              <button>sign in </button>
            </div>
          </form>
          <Link to='/sign'>
            <p className="sign-in-text"> sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
