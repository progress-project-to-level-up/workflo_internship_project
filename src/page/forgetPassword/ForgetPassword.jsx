import React from "react";
import ForgettenPass from "./forgotten.png";
import "./ForgetPassword.css";
function ForgetPassword() {
  return (
    <div className="form-sign">
      <div className="form-cont">
        <div className="form-img pass-img">
          <img src={ForgettenPass} alt="" />
        </div>
        <div className="form-main">
          <div className="pass-head">
            <h3>Forgot Password</h3>
            <p>
              The verification code will be sent to your E-mail, Please check it.
            </p>
          </div>
          <form action="" className="form-frm pass-frm">
            <div className="frm-sign-inputs">
              <div className="frm-pass-ctrl">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="frm-btn pass">
              <button>Send Code</button>
            </div>
          </form>

        </div>
      </div>
    </div>

  )

}


export default ForgetPassword;