import React from 'react'
import '../../component/glassmorphism/glassMorph.css'
import Hambugger from '../../asset/svg/hambugger.svg'
import cardOne from '../../asset/image/card1.jpg'
import woman from '../../asset/image/woman.jpg'



const GlassCards = () => {
  return (
    <div className='glassHolder'>
        <div className='myGlass'>
            <div className='imageHolder'>
                <img src={cardOne} alt="" />
            </div>
            <div className='textHolder'>
                <div className='threeDots'>
                    <img src={Hambugger} alt="" />
                </div>
                <h2>Mark Fletcher</h2>
                <p>Senior Backend Engineer</p>
            </div>


        </div>
        <div className='myGlass2'>
            <div className='imageHolder'>
                <img src={woman} alt="" />
            </div>
            <div className='textHolder'>
                <div className='threeDots'>
                    <img src={Hambugger} alt="" />
                </div>
                <h2>Bolatito Nicole</h2>
                <p>Sponsor</p>
            </div>


        </div>

        <div className='myGlass3'>
            <div className='imageHolder3'>
                <img src={woman} alt="" />
            </div>
            <div className='textHolder'>
                <div className='threeDots'>
                    <img src={Hambugger} alt="" />
                </div>
                <h3>Bolatito Nicole</h3>
                <p>Sponsor</p>
            </div>


        </div>
    </div>

  )
}

export default GlassCards