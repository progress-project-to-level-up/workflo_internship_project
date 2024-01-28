import React from 'react'
import '../../homepage/creatorcard/creatorcard.css'
import CreatorPhoto from '../../../asset/image/creatorphoto.jpg'
import creatorIcon from '../../../asset/image/Approval.png'
import ProjectButton from '../../../component/buttons/ProjectButton'

const CreatorCard = () => {
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
    <div className='creatorcard-container'>
      <div className='photoHolder'>
        <img src={CreatorPhoto} alt='Photo1' className='creator-photo'></img>
      </div>
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
    </div>
  )
}

export default CreatorCard
