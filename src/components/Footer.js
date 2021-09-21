import React from 'react'
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from 'react-share'
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <div className="container">
                <div className="row foot">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>21850 Bear Creek Road<br/>
                                Los Gatos, CA 95033</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:650-518-9733">(650) 518-9733</a>
                        </div>
                        <div className="d-flex">
                            <p>soren.j.madsen@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6 footer-links">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} duration={100} offset={-57} to="home" className="footer-nav">Home</Link><br/>
                                <Link smooth={true} duration={100} offset={-57} to="about" className="footer-nav">About Me</Link><br/>
                                <Link smooth={true} duration={100} offset={-57} to="skills" className="footer-nav">Skills</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} duration={100} offset={-57} to="experience" className="footer-nav">Experience</Link><br/>
                                <Link smooth={true} duration={100} offset={-57} to="portfolio" className="footer-nav">Portfolio</Link><br/>
                                <Link smooth={true} duration={100} offset={-57} to="endorsements" className="footer-nav">Endorsements</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 icons">
                        <div className="d-flex align-content-center icons">
                            <FacebookShareButton 
                            url={"soren.github.io"}
                            quote={"ML and Software  Engineer"}>
                                <FacebookIcon className="mx-3" size="36"/>
                            </FacebookShareButton>
                            <LinkedinShareButton 
                            url={"soren.github.io"}
                            quote={"ML and Software  Engineer"}>
                                <LinkedinIcon className="mx-3" size="36"/>
                            </LinkedinShareButton>
                            <EmailShareButton 
                            url={"soren.github.io"}
                            quote={"ML and Software  Engineer"}>
                                <EmailIcon className="mx-3" size="36"/>
                            </EmailShareButton>
                            
                        </div>
                        <p className="pt-3 text-center">
                            Copyright &copy;
                            {new Date().getFullYear()}&nbsp; Soren Madsen | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
