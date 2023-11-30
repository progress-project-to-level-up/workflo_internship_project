import React from 'react'
import '../../homepage/creatorcard/creatorcard.css'
import CreatorPhoto from '../../../asset/svg/creatorphoto.svg'
import creatorIcon from '../../../asset/image/Approval.png'
import ProjectButton from '../../../component/buttons/ProjectButton'

const CreatorCard = () => {

  return (
    <div className='creatorcard-container'>
      <div className='photoHolder'>
        <img src={CreatorPhoto} alt='Photo1' className='creator-photo'></img>
      </div>
      <div className='textholder'>
        <h2>WorkFlo. for Creators</h2>
        
        <h4><span><img src={creatorIcon} alt="verified" /></span> Access Collaborators</h4>
        <p>With WorkFlo, you can add your team members or look<br /> for collaborators with certain skillset that you need to execute your project.</p> 
        <h4><span><img src={creatorIcon} alt="verified" /></span> Access Financial Donors</h4>
        <p>With WorkFlo, request for donation and get the funding <br />needed to carry out your product. Our financiers will reach out and give you what is required.</p>
        <h4> <span> <img src={creatorIcon} alt="verified" /></span>Access other Creators</h4>
        <p>With WorkFlo, you can network with other project <br />builders and share ideas.</p>


        <ProjectButton  className="project"/>
      </div>

      
    </div>
  )
}

export default CreatorCard
