import React from 'react';
import './editProject.css';
import { CgAttachment } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { TfiClip } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

function EditProject() {
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
                            <h3>Project Details</h3>
                        </div>
                        <form action="" className="create-add-project-details">
                            <div className="form-collection">
                                <div className="frm-ctrl">
                                    <input type="text" placeholder='Project Name *' />
                                </div>
                                <div className="frm-ctrl">
                                    <select name="" id="" placeholder='Project Category'>
                                        <option value="">E-commerce</option>
                                        <option value="">Shopify</option>
                                        <option value="">Mobile App</option>
                                        <option value="">Web3</option>
                                        <option value="">Block Chain</option>
                                    </select>
                                </div>
                                <div className="frm-ctrl">
                                    <select name="" id="" placeholder='Roles Needed'>
                                        <option value="">FrontEnd Developer</option>
                                        <option value="">BackEnd Developer</option>
                                        <option value="">UI/UX Designer</option>
                                        <option value="">Web3</option>
                                        <option value="">Block Chain</option>
                                    </select>
                                </div>
                                <div className="frm-ctrl">
                                    <select name="" id="" placeholder='Project Stage'>
                                        <option value="">E-commerce</option>
                                        <option value="">Shopify</option>
                                        <option value="">Mobile App</option>
                                        <option value="">Web3</option>
                                        <option value="">Block Chain</option>
                                    </select>
                                </div>
                                <div className="frm-ctrl">
                                    <textarea name="" id="" placeholder='Project Summary'></textarea>
                                </div>
                                <div className="frm-ctrl">
                                    <textarea name="" id="" placeholder='Project Description'></textarea>
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
                            <h3>Team</h3>
                        </div>
                        <form action="" className="create-add-team">
                            <div className="team-collection">
                                <div className="frm-ctrl">
                                    <input type="text" placeholder='Invite Collaborators' />
                                </div>
                            </div>
                            <div className="create-team-btns">
                                <div className="create-collaborators">
                                    <button>Find Collaborators</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="create-forms">
                        <div className="create-form-head">
                            <h3>Access Funding</h3>
                        </div>
                        <form action="" className="create-add-project-details">
                            <div className="form-collection">
                                <div className="port-ctrl">
                                    <div className="port-txt">
                                        <input type="url" placeholder='Invite Sponsors' />
                                    </div>
                                    <div className="fund-icon">
                                        <FaPlus />
                                    </div>
                                </div>
                                <div className="port-ctrl">
                                    <div className="port-txt">
                                        <input type="url" placeholder='Bank statement' />
                                    </div>
                                    <div className="fund-icon">
                                        <TfiClip />
                                    </div>
                                </div>
                                <div className="id-ctrl">
                                    <div className="port-ctrl">
                                        <div className="port-txt">
                                            <input type="url" placeholder='Means Of Identification' />
                                        </div>
                                        <div className="fund-icon">
                                            <IoIosArrowDown />
                                        </div>
                                    </div>
                                    <div className="id-type">
                                        <span>*National ID Card, Registered Voters Card, Driver’s Licence, Passport</span>
                                    </div>
                                </div>
                                <div className="tel-ctrl">
                                    <div className="frm-ctrl">
                                        <input type="tel" placeholder='Telephone' />
                                    </div>
                                    <div className="frm-ctrl">
                                        <input type="tel" placeholder='Mobile' />
                                    </div>
                                </div>
                                <div className="frm-ctrl">
                                    <input type="text" placeholder="Guarantor's Name" />
                                </div>
                                <div className="frm-ctrl">
                                    <input type="text" placeholder="Guarantor's Address" />
                                </div>
                                <div className="tel-ctrl">
                                    <div className="frm-ctrl">
                                        <input type="tel" placeholder='Telephone' />
                                    </div>
                                    <div className="frm-ctrl">
                                        <input type="tel" placeholder='Mobile' />
                                    </div>
                                </div>
                            </div>
                            <div className="create-frm-sponsors">
                                <div className="create-form-btns create-spon">
                                    <div className="create-form-save">
                                        <button>Save</button>
                                    </div>
                                    <div className="create-form-submit">
                                        <button>Submit</button>
                                    </div>
                                </div>
                                <div className="find-sponsor">
                                    <button>Find Sponsors</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="create-forms">
                        <div className="create-form-head">
                            <h3>Delete Project</h3>
                        </div>
                        <div className="delete-detail">
                            <div className="delete-txt">
                                <span>Click the button below to delete your Project</span>
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

export default EditProject