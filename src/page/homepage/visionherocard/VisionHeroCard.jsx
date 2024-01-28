import React from 'react'
import "../../homepage/visionherocard/visionhero.css"
import VisoinImage from "../../../asset/svg/Visionhero.svg"

const VisionHeroCard = () => {
  return (
    <div className='visionCard-container'>
      <div className='vision-details'>
        <div className='vision-Text'>
          <h1 className='workflow-text'>
            With WorkFlo, transform <br /> your visions to reality.
          </h1>
          <span className='explore-text'>Explore, Collaborate, Achieve!</span>
        </div>
        <div className='visionImage'>
          <img src={VisoinImage} alt="VisionImage" />
        </div>
      </div>
    </div>
  )
}

export default VisionHeroCard
