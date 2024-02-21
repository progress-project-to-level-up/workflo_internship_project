import React from "react";
import VerifcationImg from "./verifiedImg.png";
import "./VerificationCode.css"
import { Link } from "react-router-dom";


function VerificationCode (){
    return(
<div className="form-sign">
    <div className="form-cont">
        <div className="form-img pass-img">
            <img src={VerifcationImg} alt="" />
        </div>
        <div className="form-main pass-main">
            <div className="pass-head">
                <h3>Verification Code</h3>
                <p>Enter the verification code we just sent you on your email address. </p>
            </div>
            <form action="" className="form-frm pass-frm">
            <div className="frm-verified-inputs">
              <div className="frm-verified-ctrl">
                <input type="password"/>
              </div>
              <div className="frm-verified-ctrl">
                <input type="password"/>
              </div>
              <div className="frm-verified-ctrl">
                <input type="password"/>
              </div>
              <div className="frm-verified-ctrl">
                <input type="password"/>
              </div>
              </div>
              <div className="frm-btn pass">
              <button>Send Code</button>
            </div>
            <div className="frm-verified">
              <span>Didn't recieve a code?</span>
              <Link to='/signup'>Resend</Link>
            </div>
              </form>
            
        </div>
    </div>
</div>
    )
}
export default VerificationCode;