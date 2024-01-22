import axios from "axios";
import React from "react";
import cofeeImage from "../sigin/creative.jpg";
import "../sigin/signUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [btnTitle, setBtnTitle] = useState("Sign Up");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleRegister = async (event) => {
    const message = "Registration successful";
    event.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setBtnTitle("Submiting...");
      const response = await axios.post(
        "http://localhost:8080/api/v1/registration",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        toast.success(message);
      }
      setTimeout(() => {
        setBtnTitle(btnTitle);
        navigate("/ongoingproject");
      }, 2000);
      console.log(response);
      localStorage.setItem("details", response.data);
    } catch (error) {
      setBtnTitle(btnTitle);
      toast.error(error.message);
    }
  };

  return (
    <div className="form-sign">
      <div className="form-cont">
        <div className="form-img">
          <img src={cofeeImage} alt="" />
        </div>
        <div className="form-main">
          <div className="form-header">
            <h3>Sign up</h3>
            <p>Let's get you to the moon...</p>
          </div>
          <form action="" className="form-frm">
            <div className="frm-sign-inputs">
              <div className="frm-sign-ctrl">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="frm-sign-ctrl">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="frm-sign-ctrl">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="frm-sign-ctrl">
                <input type="password" placeholder="Password"/>
              </div>
              <div className="frm-sign-ctrl">
                <input type="password" placeholder="Confirm Password"/>
              </div>
            </div>
            <div className="frm-btn">
              <button>Sign up</button>
            </div>
            <div className="frm-already">
              <span>Already have an account ?</span>
              <Link to='/login'>Signin here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
