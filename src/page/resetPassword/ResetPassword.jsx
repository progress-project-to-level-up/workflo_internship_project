import React from "react";
import "./RestPassword.css";
import RestPasswordImg from "./RestPassword.png";
function ResetPassword () {
return(
    <div className="form-sign">
    <div className="form-cont">
        <div className="form-img pass-img">
            <img src={RestPasswordImg} alt="" />
        </div>
        <div className="form-main reset-main">
            <div className="pass-head">
                <h3>Reset Password</h3>
                <p>Your new password must be different from the password you used previously </p>
            </div>
            <form action="" className="form-frm pass-frm">
            <div className="frm-sign-inputs">
              <div className="frm-sign-ctrl">
                <input type="password" placeholder="New Password"/>
              </div>
              <div className="frm-sign-ctrl">
                <input type="password" placeholder="Confirm Password"/>
              </div>
              </div>
              <div className="rest-btn ">
              <button>Save</button>
            </div>
              </form>
            
        </div>
    </div>
</div>
)
}
export default ResetPassword;