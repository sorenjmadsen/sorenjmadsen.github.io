import React from 'react'
import PortfolioItem from "./PortfolioItem"
import Jaws from "../portfolio/jaws.png"
import Fr from "../portfolio/face_recognition.png"
import C from "../portfolio/simplec.png"

import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

const openPopupJaws = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={Jaws} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <b>Read the Paper: </b>
        <a className="hyper-link" onClick={() => window.open("https://scholarcommons.scu.edu/idp_senior/72/")}>SCU Library</a>
        </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Jamming Attack Workaround Study (JAWS)",
          },
        },
      });
}

const popupConfigJaws = {
    titleBar : {
        enable: true,
        text: "Jamming Attack Workaround Study (JAWS)"
    },
    fadeIn: true,
    fadeInSpeed: 250
}

const openPopupFr = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={Fr} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <b>GitHub: </b>
        <a className="hyper-link" onClick={() => window.open("https://www.google.com")}>Link</a>
        </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Experiments in Applied Facial Recognition",
          },
        },
    });
}

const popupConfigFr = {
    titleBar : {
        enable: true,
        text: "Experiments in Applied Facial Recognition"
    },
    fadeIn: true,
    fadeInSpeed: 250
}

const openPopupC = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={C} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <b>GitHub: </b>
        <a className="hyper-link" onClick={() => window.open("https://www.google.com")}>Link</a>
        </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Simple C Compiler",
          },
        },
    });
}

const popupConfigC = {
    titleBar : {
        enable: true,
        text: "Simple C Compiler"
    },
    fadeIn: true,
    fadeInSpeed: 250
}
    

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-center py-3">
                    Portfolio
                </h1>
                <div className="image-box-wrapper row justify-content-center">
                    <PortfolioItem src={Jaws} alt="Senior design thesis..." onClick={openPopupJaws}/>
                    <PortfolioItem src={Fr} alt="Applied facial recognition..." onClick={openPopupFr}/>
                    <PortfolioItem src={C} alt="Simple C compiler..." onClick={openPopupC}/>
                </div>
            </div>
            <PopupboxContainer {...popupConfigJaws} />
            <PopupboxContainer {...popupConfigFr} />
            <PopupboxContainer {...popupConfigC} />
        </div>
    )
}

export default Portfolio
