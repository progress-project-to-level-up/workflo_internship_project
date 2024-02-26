import React, { useState } from 'react';
import searchIcon from '../../asset/svg/searchIcon.svg';
import logo from "../../asset/image/workflo.png";
import "../navbar/Nav.css";
import dropDown from "../../asset/svg/dropdown.svg";
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import user from '../../asset/svg/user.png'

export const Navbar = () => {
  // Handling side bar
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  // checking if a user account exist
  const profile = useSelector((state) => state.user.user);

  return (
    <>
      <nav className='navbar'>
        <div className="logAndSearch">
          <Link to='/' className="navLogo">
            <img src={logo} alt="" />
          </Link>
          <div className="navSearch">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search for people, projects..' />
          </div>
        </div>

        <div className={openSidebar ? "navList active" : "navList"}>
          <div className="navSide">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search for people, projects..' />
          </div>
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
          {
            profile !== null ? (
              <div className="listBtns">
                <div className="joinPro">
                  <Link to='/projects'><span>Join a Project</span></Link>
                </div>
                <div className="acctImgCont">
                  <div className="acctImg">
                    <div className="user-img">
                      <img src={user} alt="" />
                    </div>
                    <div className="drop-profile">
                      <img src={dropDown} alt="" />
                    </div>
                  </div>
                  <div className="acct-opt">
                    <Link to="/projects" className="acct-opt-list">
                      <span>My Projects</span>
                    </Link>
                    <Link to="/profile" className="acct-opt-list">
                      <span>My Profile</span>
                    </Link>
                    <Link to="" className="acct-opt-list">
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="listBtns">
                <div className="logBtn">
                  <Link to='/login' ><span>Login</span></Link>
                </div>
                <div className="joinPro">
                  <Link to='/projects'><span>Join a Project</span></Link>
                </div>
              </div>
            )
          }
        </div>

        <div className="navBurger" onClick={handleSidebar}>
          <GiHamburgerMenu className='burger' />
        </div>

        <div className={openSidebar ? "placeHolder active" : "placeHolder"} onClick={handleSidebar}></div>
      </nav>
    </>
  );
};
