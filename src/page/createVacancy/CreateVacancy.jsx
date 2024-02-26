import React from "react";
import "./CreateVacancy.css";
import { GoPlus } from "react-icons/go";

function CreateVacancy() {
  return (
    <div className="createProject">
      <div className="create-project-head">
        <h3>Create Bid</h3>
      </div>

      <div className="create-form-project">
        <div className="create-forms">
          <div className="create-form-head">
            <h3>Create Bid</h3>
          </div>
          <form action="" className="create-add-project-details">
            <div className="form-collection">
              <div className="frm-ctrl">
                {/* <input type="text" placeholder='Select Project*' /> */}
                <select name="" id="" placeholder='Select Project*'>
                  <option value="">E-commerce</option>
                  <option value="">Shopify</option>
                  <option value="">Mobile App</option>
                  <option value="">Web3</option>
                  <option value="">Block Chain</option>
                </select>
              </div>
              <div className="frm-ctrl">
                <select name="" id="" placeholder="Vacant Position*">
                  <option value="">Software Engineer</option>
                  <option value="">Graphic Designer</option>
                  <option value="">Product Manager</option>
                </select>
              </div>
              <div className="frm-ctrl">
                <select name="" id="" placeholder="Document Required">
                  <option value="">CV/Resume</option>
                  <option value="">Identify Card</option>
                  <option value="">Porfolio</option>
                </select>
              </div>
              <div className="port-ctrl">
                <div className="port-txt">
                  <input type="url" placeholder='External links' />
                </div>
                <div className="port-icon">
                  <GoPlus />
                </div>
              </div>
              <div className="frm-ctrl">
                <textarea
                  name=""
                  id=""
                  placeholder="Vacancy Description*"
                ></textarea>
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
            <h3>Contract Type</h3>
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
  );
}

export default CreateVacancy;
