import React from 'react'
import "../../homepage/Footer/Footer.css"
import Logo from "../../../asset/brand/logo.svg"

import Facebook from "../../../asset/svg/facebook.svg"
import Twitter from "../../../asset/svg/twitter.svg"
import Linkedin from "../../../asset/svg/linkedin.svg"



const Footer = () => {
  return (
    <div>

    <div className='footer-container'>
      <div className='work-flow-container'>
        <img src={Logo} alt="Logo" className='logo-image' /> 
        <span className='work-text'>Help people who need working experience to develop <br/> themselves. It will also help the project creator save a lot <br/> of effort, time and money to get the best skills.</span>
      
        <div className='social-icons'>
        <img src={Facebook} alt="Facebook" className='social' />
        <img src={Twitter} alt="Twitter" className='social' />
        <img src={Linkedin} alt="Linkedin" className='social' />
        </div>

      </div>


      <div className='trending-container'>
        <span className='trends'>Trending Category</span>

        <span className='trends2'>Ui/ UX Design</span>
        <span className='trends2'>Web Design</span>
        <span className='trends2'>Marketing</span>
        <span className='trends2'>App Developer</span>
        <span className='trends2'>Product Manager</span>
        <span className='trends2'>Graphic Designer</span>
        <span className='trends2'>Accountant</span>
        <span className='trends2'>Software Engineering</span>

      </div>



      <div className='Useful-container'>
      
        <span className='trends'>Useful Links</span>

        <span className='trends2'>Home</span>
        <span className='trends2'>About Us</span>
        <span className='trends2'>Services</span>
        <span className='trends2'>Contact</span>
        <span className='trends2'>How it works </span>
       
      </div>

    </div>

    <div className='buttom-footer'>

</div>

    </div>
  )
}

export default Footer



