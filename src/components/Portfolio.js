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
        <p>In my final design project for SCU, Jack Schoen and I investigate the idea of lightweight, plug-and-play DDoS detection and mitigation system based on Raspberry Pi.</p>
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
        <p>Nothing crazy going on here. I thought it would be cool to make a computer vision based door lock for my house. These are the test projects.</p>
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
        <p>This repository is intended to showcase the variety of my work done throughout different courses at Santa Clara University.</p>
        <b>GitHub: </b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/sorenjmadsen/SCU-Coursework")}>Link</a>
        </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "SCU Coursework",
          },
        },
    });
}

const popupConfigC = {
    titleBar : {
        enable: true,
        text: "SCU Coursework"
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
                    <PortfolioItem src={C} alt="SCU Coursework..." onClick={openPopupC}/>
                </div>
            </div>
            <PopupboxContainer {...popupConfigJaws} />
            <PopupboxContainer {...popupConfigFr} />
            <PopupboxContainer {...popupConfigC} />
        </div>
    )
}

export default Portfolio
