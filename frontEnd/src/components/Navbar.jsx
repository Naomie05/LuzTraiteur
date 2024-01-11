import React from 'react'
import { Link } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import { PiTote } from "react-icons/pi";
import { useState, useEffect } from 'react';

import './Navbar.css'

function Navbar () {
    const [navActive, setNavActive] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive); 
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return() => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() =>{
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    }, []);

    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY >= 90){
                setNavbar(true);
            }
            else{
                setNavbar(false);
            }
        };
    
        window.addEventListener('scroll', changeBackground);

        //cleanup the scroll event listener
        return () =>{
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return(
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div>
                <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                    <span className='nav__hamburger__line'></span>
                    <span className='nav__hamburger__line'></span>
                    <span className='nav__hamburger__line'></span>
                </a>
            </div>
            <div className='image--container'>
                <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='/' className='image'>
                    <img src='./img/logo.svg' alt='logo'></img>
                </Link>
            </div>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='/' className='list--content'>
                            <h3>ACCEUIL</h3>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='Menu' className='list--content'>
                            <h3>LE MENU</h3>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='Traiteur' className='list--content'>
                            <h3>SERVICE TRAITEUR</h3>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='About' className='list-content'>
                            <h3>A PROPOS</h3>
                        </Link>
                    </li>
                </ul>
            </div> 
            <div className= 'navbar--icons'>
                <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='Login' className='icons--User'>
                    <BsPersonCircle />
                </Link>
                <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to='' className='icons'>
                    <PiTote/>
                </Link>
            </div>
            <Link onClick={closeMenu} activeClass='navbar--active-content' spy={true} smooth={true} offset={-70} duration={500} to= 'Menu' className='btn btn-outline-primary'>
                <h3>COMMANDEZ</h3>
            </Link>
        </nav>

    );
    
}

export default Navbar
