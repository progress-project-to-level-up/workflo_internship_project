import React from 'react'
import "../card/HeroCard.css"
import GlassCards from '../../../component/glassmorphism/GlassMorph.jsx'
import Smile from '../../../asset/image/smillinguy.png'
import Half from '../../../asset/image/halfbutton.png'
import telegramIcon from '../../../asset/svg/cusorIcon.svg'

const HeroCard = () => {
  return (
    <div className='hero-container'>
      <div className='hero-side' >
        <div className='idea'>
          <h1>
            From <span>Idea</span> <br />to <span>Execution.</span>
          </h1>
          <h3>
            Meet the people you need, get the resources <br /> you need, to see your next project come to life.
          </h3>
          <button className='create-btn'>
            <div className='telegram-icon'>
              <img src={telegramIcon} alt="" />
            </div>
            <div className='create-btn-text'>
              Create a project
            </div>
          </button>
        </div>
      </div>

      <div className='image-container'>
        <img src={Smile} alt="Smile" className='image' />
      </div>
      <GlassCards className='glassy' />
    </div>
  )
}

export default HeroCard
