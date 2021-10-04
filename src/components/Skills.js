import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFileCode, faGraduationCap, faPuzzlePiece, faWrench } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <div className="py-5">
                <div className="container">
                    <h1>Skills</h1>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 skill">
                            <div className="box">
                            <FontAwesomeIcon className="icon" icon={faFileCode} size="lg"/>
                                <h3>Languages</h3>
                                <ul>
                                    <li>C/C++</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Matlab</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 skill">
                            <div className="box">
                            <FontAwesomeIcon className="icon" icon={faPuzzlePiece} size="lg"/>
                                <h3>Frameworks</h3>
                                <ul>
                                    <li>TensorFlow, Keras</li>
                                    <li>Pandas</li>
                                    <li>Numpy</li>
                                    <li>React.js</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 skill">
                            <div className="box">
                            <FontAwesomeIcon className="icon" icon={faWrench} size="lg"/>
                                <h3>Tools</h3>
                                <ul>
                                    <li>Postman API</li>
                                    <li>WireShark</li>
                                    <li>Python Notebooks</li>
                                    <li>Git, Jenkins</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 skill">
                            <div className="box">
                                <FontAwesomeIcon className="icon" icon={faGraduationCap} size="lg"/>
                                <h3>Coursework</h3>
                                <ul>
                                    <li>Computer Networks</li>
                                    <li>Applied Cryptography</li>
                                    <li>Intro to ML</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
