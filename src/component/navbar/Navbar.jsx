import React, { useState } from 'react';
import searchIcon from '../../asset/svg/searchIcon.svg';
import logo from "../../asset/image/workflo.png";
import "../navbar/Nav.css";
import dropDown from "../../asset/svg/dropdown.svg";
import { useLocation, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      {isHomePage && (
        <nav className='navbar'>
          <div className="logAndSearch">
            <div className="navLogo">
              <img src={logo} alt="" />
            </div>
            <div className="navSearch">
              <img src={searchIcon} alt="" />
              <input type="text" placeholder='Search for people, projects..' />
            </div>
          </div>

          <div className={openSidebar ? "navList active" : "navList"}>
            <ul className="contList">
              <li>
                <NavLink to='/'>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/projects'>
                  <span>Projects</span>
                  <img src={dropDown} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to='/discover'>
                  <span>Discover</span>
                  <img src={dropDown} alt="" />
                </NavLink>
              </li>
            </ul>
            <div className="listBtns">
              <div className="logBtn">
                <button>Login</button>
              </div>
              <div className="joinPro">
                <button>Join a Project</button>
              </div>
            </div>
          </div>

          <div className="navBurger" onClick={handleSidebar}>
            <GiHamburgerMenu className='burger' />
          </div>

          <div className={openSidebar ? "placeHolder active" : "placeHolder"} onClick={handleSidebar}></div>
        </nav>
      )}
    </>
  );
};
