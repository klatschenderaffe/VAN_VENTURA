import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo1.png';
import { Link } from 'react-scroll';
import Menue from '../../assets/menue.png';

const Navbar = () => {
  //The navbar should only become dark when we start scrolling
  const [sticky, setSticky] = useState(false);
  //If we scroll --> eventlistener on --> start function
  useEffect(() => {
    window.addEventListener('scroll', () => {
      //If you scroll about the value of 50px setSticky to true otherwise false
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  //If mobileMenu is on you can see the navigation on the side. Otherwise is hidden.
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    //if mobileMenu is true then set it to false, else set it to true
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    // if sticky is set show the class 'dark-nav'
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      {/* If MobileMenu is true nothing change, otherwise hide-mobile-menu */}
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="map" smooth={true} offset={-280} duration={500}>
            Stellplatzsuche
          </Link>
        </li>
        <li>
          <Link to="definitionen" smooth={true} offset={-320} duration={500}>
            Länderregeln
          </Link>
        </li>
      </ul>
      <img src={Menue} alt="" className="menue-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
