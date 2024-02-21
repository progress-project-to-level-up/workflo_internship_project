import React from 'react';
import { CgAttachment } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { FaSlack } from "react-icons/fa";
import { LiaGoogleDrive } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import './profile.css';

function Profile() {
    return (
        <div className='createProject'>
            <div className="create-project-head">
                <h3>Profile</h3>
            </div>
            <div className="create-project-cont">
                <div className="create-add-image">
                    <div className="attach-media">
                        <div className="attach-text">
                            <CgAttachment />
                            <span>Choose Files</span>
                        </div>
                        <div className="attach-drop-arrow">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className="max-file-info">
                        <span>Max File Size 25kb</span>
                    </div>
                </div>

                <div className="create-form-project">
                    <div className="create-forms">
                        <div className="create-form-head">
                            <h3>Personal Details</h3>
                        </div>
                        <form action="" className="create-add-project-details">
                            <div className="form-collection">
                                <div className="frm-ctrl">
                                    <input type="text" placeholder='First Name *' />
                                </div>
                                <div className="frm-ctrl">
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className="frm-ctrl">
                                    <input type="text" placeholder='Address' />
                                </div>
                                <div className="frm-ctrl">
                                    <textarea name="" placeholder='About'></textarea>
                                </div>
                            </div>
                            <div className="create-form-btns">
                                <div className="create-form-save">
                                    <button>Save</button>
                                </div>
                                <div className="create-form-submit">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="create-team-details">
                        <div className="create-team-head">
                            <h3>Professional Details</h3>
                        </div>
                        <form action="" className="create-add-team">
                            <div className="team-collection">
                                <div className="frm-ctrl">
                                    <input type="text" placeholder='Skills' />
                                </div>
                            </div>
                            <div className="portfolio-links">
                                <div className="port-head">
                                    <h4>Portfolio</h4>
                                </div>
                                <div className="port-links">
                                    <div className="port-ctrl">
                                        <div className="port-icon">
                                            <AiFillGithub />
                                        </div>
                                        <div className="port-txt">
                                            <input type="url" placeholder='Github' />
                                        </div>
                                    </div>
                                    <div className="port-ctrl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 38 38" fill="none">
                                            <path d="M18.9998 31.6667C22.3592 31.6667 25.5811 30.3322 27.9565 27.9568C30.332 25.5813 31.6665 22.3595 31.6665 19.0001C31.6665 15.6407 30.332 12.4189 27.9565 10.0434C25.5811 7.66793 22.3592 6.33341 18.9998 6.33341C15.6404 6.33341 12.4186 7.66793 10.0432 10.0434C7.66769 12.4189 6.33317 15.6407 6.33317 19.0001C6.33317 22.3595 7.66769 25.5813 10.0432 27.9568C12.4186 30.3322 15.6404 31.6667 18.9998 31.6667ZM18.9998 34.8334C10.2551 34.8334 3.1665 27.7448 3.1665 19.0001C3.1665 10.2553 10.2551 3.16675 18.9998 3.16675C27.7446 3.16675 34.8332 10.2553 34.8332 19.0001C34.8332 27.7448 27.7446 34.8334 18.9998 34.8334Z" fill="black" />
                                            <path d="M25.3805 15.6433H21.4143V14.6585H25.3821V15.6449L25.3805 15.6433ZM18.7733 19.6856C19.0298 20.0814 19.1564 20.5628 19.1564 21.128C19.1564 21.7138 19.0139 22.2363 18.7194 22.7003C18.5232 23.0261 18.261 23.3074 17.9496 23.5258C17.6382 23.7442 17.2845 23.895 16.9113 23.9685C16.4531 24.0601 15.9867 24.1047 15.5195 24.1015H11.083V14.25H15.8409C17.0395 14.269 17.8898 14.6173 18.3917 15.2998C18.6925 15.7178 18.8429 16.2197 18.8429 16.8039C18.8429 17.4056 18.6925 17.8885 18.3869 18.2543C18.2191 18.4601 17.9689 18.6469 17.638 18.8148C18.1383 18.9984 18.5183 19.2866 18.7733 19.6856ZM13.3551 18.1339H15.4403C15.8678 18.1339 16.2146 18.0532 16.4806 17.8901C16.7482 17.727 16.8812 17.4388 16.8812 17.024C16.8812 16.5648 16.7054 16.2608 16.3523 16.1152C15.9751 16.0022 15.5823 15.9498 15.1886 15.96H13.3551V18.1339ZM17.0823 20.9871C17.0823 20.4757 16.8717 20.1226 16.4553 19.9326C16.2209 19.8249 15.8916 19.7695 15.4704 19.7648H13.3551V22.3899H15.4372C15.8647 22.3899 16.1972 22.3345 16.4347 22.2173C16.8653 22.0036 17.0823 21.5951 17.0823 20.9871ZM26.853 19.3848C26.9005 19.7078 26.9227 20.1748 26.9148 20.786H21.7768C21.8053 21.4953 22.0492 21.9909 22.5147 22.2743C22.7933 22.4533 23.1322 22.5403 23.5312 22.5403C23.9508 22.5403 24.2912 22.4343 24.5556 22.2158C24.713 22.0813 24.8417 21.9166 24.934 21.7313H26.8182C26.7675 22.1508 26.5411 22.5752 26.1342 23.0074C25.5008 23.693 24.6173 24.0366 23.4789 24.0366C22.5741 24.0483 21.6941 23.7411 20.9931 23.1689C20.2774 22.5894 19.9164 21.6489 19.9164 20.3427C19.9164 19.1187 20.241 18.1814 20.8886 17.5291C21.5378 16.8752 22.3785 16.5506 23.414 16.5506C24.0268 16.5506 24.5793 16.6598 25.0733 16.8799C25.5642 17.1016 25.9711 17.4483 26.2909 17.9249C26.5807 18.3461 26.7659 18.8306 26.853 19.3848ZM25.0005 19.5684C24.9657 19.0776 24.801 18.7071 24.5065 18.4538C24.2025 18.1949 23.8131 18.0583 23.414 18.0706C22.939 18.0706 22.5733 18.2083 22.312 18.4759C22.0508 18.7451 21.8877 19.1093 21.8212 19.5684H25.0005Z" fill="black" />
                                        </svg>
                                        <div className="port-txt">
                                            <input type="url" placeholder='Behance' />
                                        </div>
                                    </div>
                                    <div className="port-ctrl">
                                        <div className="port-icon">
                                            <FaSlack />
                                        </div>
                                        <div className="port-txt">
                                            <input type="url" placeholder='Slack' />
                                        </div>
                                    </div>
                                    <div className="port-ctrl">
                                        <div className="port-icon">
                                            <LiaGoogleDrive />
                                        </div>
                                        <div className="port-txt">
                                            <input type="url" placeholder='Drive' />
                                        </div>
                                    </div>
                                    <div className="port-ctrl">
                                        <div className="port-icon">
                                            <FaLink />
                                        </div>
                                        <div className="port-txt">
                                            <input type="url" placeholder='Others' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-form-btns">
                                <div className="create-form-save">
                                    <button>Save</button>
                                </div>
                                <div className="create-form-submit">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="create-forms">
                        <div className="create-form-head">
                            <h3>Change Password</h3>
                        </div>
                        <form action="" className="create-add-project-details">
                            <div className="form-collection">
                                <div className="frm-ctrl">
                                    <input type="password" placeholder='Old Password' />
                                </div>
                                <div className="frm-ctrl">
                                    <input type="password" placeholder='New Password' />
                                </div>
                                <div className="frm-ctrl">
                                    <input type="password" placeholder='Confirm Password'></input>
                                </div>
                            </div>
                            <div className="create-form-btns">
                                <div className="create-form-submit">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="create-forms">
                        <div className="create-form-head">
                            <h3>Delete Account</h3>
                        </div>
                        <div className="delete-detail">
                            <div className="delete-txt">
                                <span>Click the button below to delete your account</span>
                            </div>
                            <div className="delete-btn">
                                <button>Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile