import React from 'react';
import './onBoard.css';
import onboard from './onboard.png';
import { Link } from 'react-router-dom';

function Onboarding() {
    return (
        <div className="form-sign">
            <div className="form-cont">
                <div className="form-img onboard-img">
                    <img src={onboard} alt="" />
                </div>
                <div className="form-main">
                    <div className="onboard-head">
                        <h3>You are logged in</h3>
                        <p>What would you like to do</p>
                    </div>
                    <div className="onboard-link-project">
                        <div className="link-onboard">
                            <Link to='/create-project'>
                                <span>Create Project</span>
                            </Link>
                            <Link>
                                <span>Join Project</span>
                            </Link>
                            <Link>
                                <span>Sponsor Project</span>
                            </Link>
                        </div>
                        <div className="view-project">
                            <span>Or would you rather <Link to='/projects'>view projects ?</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding