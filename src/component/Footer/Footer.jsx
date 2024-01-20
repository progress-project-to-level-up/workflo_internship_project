import React from 'react';
import "./Footer.css";
import Logo from "../../asset/brand/logo.svg";
import Facebook from "../../asset/svg/facebook.svg";
import Twitter from "../../asset/svg/twitter.svg";
import Linkedin from "../../asset/svg/linkedin.svg";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <div className="footMain">
        <div className="foot-about">
          <div className="footLogo">
            <img src={Logo} alt="" />
          </div>
          <div className="footText">
            <p>
              Help people who need working experience to develop themselves. It will also help the project creator save a lot of effort, time and money to get the best skills.
            </p>
          </div>
          <div className="footSocial">
            <Link className="socials">
              <FaFacebookF />
              <span>/ workflo</span>
            </Link>
            <Link className="socials">
              <FaTwitter />
              <span>/ workflo</span>
            </Link>
            <Link className="socials">
              <FaLinkedinIn />
              <span>/ workflo_company</span>
            </Link>
          </div>
        </div>

        <div className="footList">
          <div className="footListHead">
            <h3>Trending Category</h3>
          </div>
          <ul className='footMain-list'>
            <li>
              <Link>UI/UX Design</Link>
            </li>
            <li>
              <Link>Web Design</Link>
            </li>
            <li>
              <Link>Marketing</Link>
            </li>
            <li>
              <Link>App Developer</Link>
            </li>
            <li>
              <Link>Project Manager</Link>
            </li>
            <li>
              <Link>Graphic Designer</Link>
            </li>
            <li>
              <Link>Accountant</Link>
            </li>
            <li>
              <Link>Software Engineering</Link>
            </li>
          </ul>
        </div>
        <div className="footList">
          <div className="footListHead">
            <h3>Useful Links</h3>
          </div>
          <ul className='footMain-list'>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>How it Works</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footBottom">
        <div className="footCopy">
          <p>Copyright All rights reserved.2023</p>
        </div>
        <ul className="footBotList">
          <li>
            <Link>Terms of Service</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Content Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer



