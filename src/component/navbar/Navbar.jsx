import React from 'react';
import SearchIcon from '../../asset/svg/searchIcon.svg';
import Logo from "../../asset/image/workflo.png";
import Nav from "../navbar/Nav.css";
import DropDown from "../../asset/svg/dropdown.svg";
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
    {isHomePage && (
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
          </ul>
        </nav>

        <div className='btn'>
          <Link to='/login'>          
            <button className='btn-login'>Login</button>
          </Link>
          <button className='btn-project'>Join a Project</button>
        </div>
      </div>
    )}
    </>
  );
};
