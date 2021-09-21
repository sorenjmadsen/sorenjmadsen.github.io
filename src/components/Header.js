import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>MACHINE LEARNING AND SOFTWARE DEVELOPMENT</h1>
                <Typed
                    className="typed-text"
                    strings={["C/C++", "Python", "MATLAB", "Pytorch", "Apache Spark"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop={true}
                />
            </div>
        </div>
    )
}

export default Header
