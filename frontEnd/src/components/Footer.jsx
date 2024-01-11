import React from 'react';
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb--footer section--padding'>
        <div className='sb--footer--links'>
          <div className='sb--footer-links-div'>
            <Link to='Home'>
              <img src="./img/logo.svg" alt="" />
            </Link>
            <br />
            <p>Suivez-nous sur nos reseaux sociaux!</p>
            <br />
            <div className='footer--icons'>
              <Link>
                <FaFacebookSquare/>
              </Link>
              <Link>
                <FaInstagram/>
              </Link>
              <Link>
                <FaTwitter/>
              </Link>
              <Link>
                <FaLinkedin/>
              </Link>
            </div>
          </div>
          <div className='sb--footer--links-div'>
            <h4>Liens Important</h4>
            <br />
            <Link to='Home'>
              <p>Acceuil</p>
            </Link>
            <Link to='Menu'>
              <p>Le Menu</p>
            </Link>
            <Link to='Traiteur'>
              <p>Service Traiteur</p>
            </Link>
            <Link to='About'>
              <p>A Propos</p>
            </Link>
          </div>
          <div className='sb--footer--links-div'>
            <h4>Contactez-nous</h4>
            <br />
            <div className='footer--icons-contact'>
              <FaPhoneAlt/>
              <p>+243 822 964 860</p>
            </div>
            <div className='footer--icons-contact'>
              <FaPhoneAlt/>
              <p>+243 850 884 484</p>
            </div>
            <div className='footer--icons-contact'>
              <FaEnvelope/>
              <p>support@luz-traiteur.com</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='sb--footer-below'>
          <div className='sb--footer-copyright'>
            <p>
              &copy;{new Date().getFullYear()} Luz Traiteur. All right reserved.
            </p>
          </div>
          <div className='sb--footer-below-links'>
            <Link>
              <div><p>Terms & Conditions</p></div>
              <div><p>Privacy Policy</p></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
