import React, { useEffect, useState } from "react";
import cofeeImage from "../sigin/creative.jpg";
import { animateScroll as scroll } from "react-scroll";
import "../sigin/signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAccount } from "../../store/user/userSlice";
import { toast } from "react-toastify";

const Signup = () => {
  // scroll to page after each navigation
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint',
    });
  }, []);

  // navigation
  const navigate = useNavigate();

  // dispatch function
  const dispatch = useDispatch();

  // setting the signup authentication and registration
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // setting error message
  const [error, setError] = useState({});

  // validating the form
  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    else if (formData.firstName.length < 3) {
      newErrors.firstName = 'First Name must be at least 3 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    else if (formData.lastName.length < 3) {
      newErrors.lastName = 'Last Name must be at least 3 characters';
    }

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address';
    }
    else if (!formData.email.trim()) {
      newErrors.email = 'Email account is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handling data submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const { confirmPassword, ...userData } = formData;
      dispatch(createAccount(userData));
      toast.success('Account created successfully');
      navigate('/login');
    }
  }

  // handling onChange value for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

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
          <form onSubmit={handleSubmit} action="" className="form-frm">
            <div className="frm-sign-inputs">
              <div className="frm-sign-ctrl">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {error.firstName && <span className="err-msg">{error.firstName}</span>}
              </div>
              <div className="frm-sign-ctrl">
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {error.lastName && <span className="err-msg">{error.lastName}</span>}
              </div>
              <div className="frm-sign-ctrl">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
                {error.email && <span className="err-msg">{error.email}</span>}
              </div>
              <div className="frm-sign-ctrl">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                {error.password && <span className="err-msg">{error.password}</span>}
              </div>
              <div className="frm-sign-ctrl">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                {error.confirmPassword && <span className="err-msg">{error.confirmPassword}</span>}
              </div>
            </div>
            <div className="frm-btn">
              <button type="submit">Sign up</button>
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
