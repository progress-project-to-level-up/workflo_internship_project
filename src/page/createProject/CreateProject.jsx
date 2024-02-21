import React from 'react';
import './createProject.css';
import { CgAttachment } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

function CreateProject() {
    return (
        <div className='createProject'>
            <div className="create-project-head">
                <h3>Create Project</h3>
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
                </div>
            </div>
        </div>
    )
}

export default CreateProject