import React from 'react'
import {Link} from 'react-scroll'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
          <a className="navbar-brand" href="#">Soren Madsen</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link"  offset={-57} duration={100} href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" className="nav-link" offset={-57} duration={100} href="#">About Me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experience" className="nav-link" offset={-57} duration={100} href="#">Experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" className="nav-link" offset={-57} duration={100} href="#">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="endorsements" className="nav-link" offset={-57} duration={100} href="#">Endorsements</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" className="nav-link" offset={-57} duration={100} href="#">Contact</Link>
              </li>
              
            </ul>
          </div>
        </nav>
    )
}

export default NavBar

