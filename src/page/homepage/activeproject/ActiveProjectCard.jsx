import React from 'react'
import '../../homepage/activeproject/activeproject.css'
import BidButton from '../../../component/buttons/BidButton'


const ActiveProjectCard = (props) => {
  return (
     <div className='active-project-container'>
     <img className='image-project' src={props.projectImage} alt="active project" />
     <div className='project-details'>
       <h3 className='project-name'>{props.projectName}</h3>
       <p className='project-description'>{props.projectDescription}</p>
     </div>
     <div className='role-container'>
         <div >
           <p className='role-need'>Role Needed</p>
           <p className='description'>{props.roleDescription}</p>
         </div>
       
     
       <button className='active-btn' >Bid to join</button>
     

     </div>
   </div>
  )
}

export default ActiveProjectCard
