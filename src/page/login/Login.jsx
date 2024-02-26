import loginPhoto from "../login/loginPhoto.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Getting user
  const profile = useSelector((state) => state.user.user);

  // Handling navigation
  const navigate = useNavigate();

  // authenticating user credentials
  const [logUser, setLogUser] = useState({
    email: '',
    password: ''
  })

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogUser({
      ...logUser, [name]: value
    });
  };

  // setting error message
  const [error, setError] = useState({});

  // checking user input
  const validateUser = () => {
    const newErrors = {};
    if (!logUser.email.trim()) {
      newErrors.email = 'Email field is required';
    }
    else if (logUser.email !== profile.email) {
      newErrors.email = 'Invalid email address'
    }

    if (!logUser.password.trim()) {
      newErrors.password = 'Password field is required';
    }
    else if (logUser.password !== profile.password) {
      newErrors.password = 'Invalid credentials';
    }

    setError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  // Logging in
  const handleLogin = (e) => {
    e.preventDefault();

    if (!profile) {
      toast.info('No account found');
    }
    else {
      if (validateUser()) {
        navigate("/onboard");
        toast.success("Login Successful");
      }
    }
  }


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
          <form onSubmit={handleLogin} action="" className="form-frm">
            <div className="frm-sign-inputs">
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
            </div>
            <div className="frm-pwd-crd">
              <div className="frm-pwd-ctrl">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
              <Link to='forgotPassword' className="frm-forget">
                <span>Forgot Password ?</span>
              </Link>
            </div>
            <div className="frm-btn">
              <button type="submit">Sign in</button>
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
