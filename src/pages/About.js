import React from "react";
import "./about.css";
import code from "../images/code.jpg"
import mpls from "../images/mpls.jpg"
import portrait from "../images/portrait.jpg"
import resume from "../resume/ksanderson-resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faHiking } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import linkedInLogo from "../images/linkedin.png"
import githubLogo from "../images/github.webp"
import gmailLogo from "../images/gmail.webp"

function About() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-around bio-row h-100">
                <div className="col-12 col-md-6 col-lg-5 mt-5 bio-box">
                    <h2 className="header" id="bio-header">ABOUT ME</h2>
                    <ul id="bio-text">
                        <li className="bio-list-item"><FontAwesomeIcon icon={faMapMarker} /> Minneapolis, MN</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faLaptop} /> Behavioral Therapist turned Programmer</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faUniversity} /> University of Minnesota Coding Bootcamp</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faEdit} /> Web Designer</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faBriefcase} /> Dedicated and Industrious</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faHiking} /> Hiking and Tennis Enthusiast</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faGamepad} /> Video Gamer</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faGamepad} /> Video Gamer</li>
                    </ul>
                    <h2 className="header" id="bio-header">RESUM&Egrave;</h2>
                    <a href={resume} target="_blank">
                        <p id="resume-link"><FontAwesomeIcon icon={faStickyNote} /> View Resume Here</p>
                     </a>
                </div>
                <div className="col-12 col-md-5 col-lg-6 mt-5">
                    <div className="row picture-row justify-content-center ">
                        <div className="col-12 col-md-6 col-lg-4 picture-column"><img src={portrait} alt="potrait of Kelsey" className="pic" /></div>
                        <div className="col-12 col-md-6 col-lg-4 picture-column"><img src={code} alt="potrait of Kelsey" className="pic" /></div>
                        <div className="col-sm-4 d-none d-lg-block picture-column"><img src={mpls} alt="potrait of Kelsey" className="pic" /></div>
                    </div>
                    <div className="row tech-box">
                        <h2 className="header" id="tech-header">PROFICIENT TECHNOLOGIES</h2>
                        <ul id="logos">
                            <li className="logo" >React</li>
                            <li className="logo" >HTML</li>
                            <li className="logo" >CSS </li>
                            <li className="logo" >JavaScript</li>
                            <li className="logo" >Express</li>
                            <li className="logo" >MySQL</li>
                            <li className="logo" >MongoDB</li>
                            <li className="logo" >Node.js</li>
                        </ul>
                    </div>
                    <div className="row tech-box">
                        <h2 className="header" id="contact-header">CONTACT ME</h2>
                        <ul className="contact-list">
                            <div className="contact-container">
                                <li className="contact-list"><a href="mailto:kelseyschreifels@gmail.com"><img className="contact-me-logo" src={gmailLogo} alt="Gmail logo" /></a></li>
                            </div>
                            <div className="contact-container">
                                <li className="contact-list"><a href="https://www.linkedin.com/in/kelseyschreifels" target="_blank"><img className="contact-me-logo" src={linkedInLogo}
                                    alt="LinkedIn logo" /></a></li>
                            </div>
                            <div className="contact-container">
                                <li className="contact-list"><a href="https://www.github.com/kelseysanderson" target="_blank"><img className="contact-me-logo" src={githubLogo} alt="GitHub logo" /></a></li>
                            </div>
                        </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default About;