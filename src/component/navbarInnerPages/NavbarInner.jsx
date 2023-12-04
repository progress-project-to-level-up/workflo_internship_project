
import React from 'react'
// import LogoBrand  from '../../asset/brand/logo.svg'
import SearchIcon from '../../asset/svg/searchIcon.svg'
import Logo from "../../asset/image/workflo.png"
import NavInner from "../navbarInnerPages/NavInner.css"

import DropDown from "../../asset/svg/dropdown.svg"

// importScripts

export const NavbarInner = () => {
  

  return (
    <div className='NavBar-container'>
      
        <div className="logo-container">
          <img src={Logo} alt="logo brand" className='logo' />  

          <div className='Input-bar'>
          <img src={SearchIcon} alt="searchIcon"  className='search-icon'/>
          <input id='search-text' type="text" placeholder='Search for people, projects'  />
        </div>

        </div>

        

        <nav className="projectHeader">
            <ul className='menu'>
              <li className='project'>Home</li>
              <li className='project icons'>Projects <img src={DropDown} alt='dropdown' className='drop-icon' /> </li>
              <li className='project icons'>Discovery <img src={DropDown} alt='dropdown' className='drop-icon' /> </li>
              {/* <li>Discover</li> */}
            </ul>
        </nav>

        <div className='btn'>
              <button className='btn-login'>Login</button>

              {/* <div className='btn-login'>
              
              </div>

              <div className='btn-project'>

              </div> */}
              <button className='btn-project'>Join a Project</button>

              

          </div>

    </div>
  )
}
