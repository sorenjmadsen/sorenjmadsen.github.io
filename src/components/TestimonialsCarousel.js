import React from 'react'

import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'

const TestimonialsCarousel = () => {
    return (
        <Carousel>
            <>
                <div className="review">
                    <FontAwesomeIcon icon={faUserTie} className="carousel-icon" size="2x"/>
                    <h3>Li Wu, Manager</h3>
                    <p>I am very pleased to endorse Soren and highly recommend him as a talented Software Engineer.</p>
                    <p>Soren worked in my team as a Software Engineer and directly reports to me. He worked on multiple projects which utilize Python, NWJS, Node.js and C/C++. Soren was a very productive person, quick learner and multi-skilled. He is a careful, self-motivated and intelligent team player. Not only deliver his tasks on time with great quality, Soren also proposed and investigated cross platform solution including Windows and Linux, implemented a very efficient solution to automate some complex software systems. His software products have constantly been used in my team, some of his products have been delivered to industrial top brands and received outstanding comments.</p>
                    <p>I would definitely recruit Soren again if it is possible.</p>
                </div>
            </>
            <>
                <div className="review">
                    <FontAwesomeIcon icon={faUser} className="carousel-icon" size="2x"/>
                    <h3>Jack Schoen, Friend</h3>
                    <p>Pretty good. Not bad. Can't complain.</p>
                </div>
            </>
            <>
                <div className="review">
                    <FontAwesomeIcon icon={faUser} className="carousel-icon" size="2x"/>
                    <h3>Sofia Madsen, 10yo Sister</h3>
                    <p>Sometimes, he's my favorite sibling.</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
