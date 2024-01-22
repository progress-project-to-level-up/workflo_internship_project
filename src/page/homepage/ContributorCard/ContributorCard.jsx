import React from 'react'
import Sponsor from '../../homepage/ContributorCard/sponsor.svg'
import creatorIcon from '../../../asset/svg/creatorIcon.svg'
import ProjectButton from '../../../component/buttons/ProjectButton'
// import SponsorCardImage from '../../../Resuable/component/SponsorCardImage'

import "../../homepage/ContributorCard/ContributorCard.css"

const ContributorCard = () => {
  const creatorcard = [
    {
      id: 1,
      head: 'Access Collaborators',
      text: 'With WorkFlo, you can add your team members or look for collaborators with certain skillset that you need to execute your project.'
    },
    {
      id: 2,
      head: 'Access Financial Donors',
      text: 'With WorkFlo, request for donation and get the funding needed to carry out your product. Our financiers will reach out and give you what is required.'
    },
    {
      id: 3,
      head: 'Access other Creators',
      text: 'With WorkFlo, you can network with other project builders and share ideas.'
    }
  ];

  return (
    <div className='creatorcard-container create2'>
      <div className='textholder'>
        <div className="textHoldHead">
          <h2>WorkFlo. for Creators</h2>
        </div>
        <div className="textHoldCnt">
          {
            creatorcard.map((card, ind) => (
              <div key={ind} className="holdCreator">
                <div className="holdBadge">
                  <img src={creatorIcon} alt="" />
                </div>
                <div className="holdCrtTxt">
                  <h4>{card.head}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))
          }
        </div>
        <ProjectButton className="project" />
      </div>
      <div className='photoHolder'>
        <img src={Sponsor} alt='Photo1' className='creator-photo'></img>
      </div>
    </div>
  )
}

export default ContributorCard
