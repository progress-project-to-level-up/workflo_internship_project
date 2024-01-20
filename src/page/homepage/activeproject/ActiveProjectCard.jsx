import React from 'react'
import '../../homepage/activeproject/activeproject.css'
import BidButton from '../../../component/buttons/BidButton'


const ActiveProjectCard = (props) => {
  return (
    <div className='active-project-container'>
      <div className="active-img">
        <img src={props.projectImage} alt="" />
      </div>
      
      <div className="active-card-container">
        <div className="active-project-summary">
          <div className="active-desc">
            <h3>{props.projectName}</h3>
            <h5>{props.projectTitle}</h5>
            <p>{props.projectDescription}</p>
          </div>
          <div className="active-role">
            <div className="role-need">
              <h3>Roles needed</h3>
              <p>
                {props.projectRole}
              </p>
            </div>
            <div className="role-btn">
              <button>Bid To Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveProjectCard
