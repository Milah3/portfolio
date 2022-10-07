import React from 'react'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 


const Navbar = () => {
  return (
    <>
      <div className="row navbar">
        <div className="one-third column">
          <a href='/' >Cigomba.tech</a>
          </div>
        <div className="one-third column">&nbsp;</div>
        <div className="one-third column">
          <ul>
            <li>
              <a href="https://github.com/Milah3">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/cigomba-miler">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://donorsee.com">
              <FontAwesomeIcon icon={faSeedling} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar

