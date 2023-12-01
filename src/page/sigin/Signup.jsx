import axios from "axios";
import React from "react";
import cofeeImage from "../sigin/signUpPhoto.svg";
import "../sigin/signUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    <div>
      <div className="signup-container">
        <div className="image-signup-txt">
          <div className="drinking-cofee-img">
            <img src={cofeeImage} alt="" />
          </div>
          <div className="sig-up-container">
            <div>
              <h1>Sign Up</h1>
              <p>Lets get you to the moon</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="formInput">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    placeholder="PhoneNumber"
                    required
                    minLength="11"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                    minLength="7"
                  />
                </div>
                <div>
                  <button type="submit"> {btnTitle}</button>
                </div>
              </div>
            </form>

            <div>
              <p>already have an account sign up here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
