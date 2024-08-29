import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo1.png'
import { Link } from 'react-scroll';
import Menue from '../../assets/menue.png'

const Navbar = () => {
    //Die Navbar soll nur dunkel werden wenn wir anfangen zu Scrollen
    const [sticky, setSticky] = useState(false);
    // Wenn wir Scrollen -> Eventlistener AN -> dann führe folgende Funktion aus
    useEffect(() => {
        window.addEventListener('scroll', () => {
            //Scrollen wir über den Wert 50px setze den Sticky Zustand auf true wenn nicht bleibts bei false
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    //Um das Menu in der Mobilen Ansicht zu verstecken oder sichtbar zu machen.
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=> {
        //if mobileMenu is true then set it to false, else set it to true
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
        // Wenn der Sticky Zustand gesetzt ist, wird die Klasse dark-nav ausgeführt
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='' className='logo' />
            {/* Wenn MobileMenu true ist passiert nichts, wenn false führe die Klasse hide-mobile-menu aus */}
            <ul className= {mobileMenu?'':'hide-mobile-menu'}> 
                {/* Link gehört zu react-scroll, welches ich installiert habe. Die Parameter die wir bestimmen können sind: 
                to(wohin) smooth(ob es smooth scrollen soll) offset(Das Ziel ein kleines bisschen verschieben) und duration (wie lange soll es scrollen)*/}
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='map' smooth={true} offset={-280} duration={500}>Stellplatzsuche</Link></li>
                <li><Link to='laender' smooth={true} offset={-290} duration={500}>Länderregeln</Link></li>
            </ul>
            <img src={Menue} alt="" className='menue-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
