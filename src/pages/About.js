import React from "react";
import "./about.css";
import portraitone from "../images/portraitone.JPG"
import portraittwo from "../images/portraittwo.jpg"
import code from "../images/code.jpg"
import mpls from "../images/mpls.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faHiking } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'



function About() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-around bio-row">
                <div className="col-12 col-lg-6 mt-5 bio-box">
                    <h2 id="bio-header">ABOUT ME</h2>
                    <ul id="bio-text">
                        <li className="bio-list-item"><FontAwesomeIcon icon={faMapMarker} /> Minneapolis, MN</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faLaptop} /> Therapist turned programmer</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faUniversity} /> Completed University of Minnesota Coding Bootcamp</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faEdit} /> Web Designer</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faBriefcase} /> Hard worker</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faHiking} /> Hiking/tennis/tv enthusiast</li>
                        <li className="bio-list-item"><FontAwesomeIcon icon={faGamepad} /> Video game lover</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5 mt-5 empty-box"></div>
            </div>
            <div className="row justify-content-around bio-row">
                <div className="col-12 col-lg-6 mt-5">
                    <div className="row picture-row justify-content-center">
                        <div className="col-12 col-md-4 picture-column"><img src={portraittwo} alt="potrait of Kelsey" className="pic" /></div>
                        <div className="col-12 col-md-4 picture-column"><img src={code} alt="potrait of Kelsey" className="pic" /></div>
                        <div className="col-12 col-md-4 picture-column"><img src={mpls} alt="potrait of Kelsey" className="pic" /></div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 mt-5 tech-box">
                    <h2 id="tech-header">PROFICIENT TECHNOLOGIES</h2>
                    <ul id="logos">
                        <li className="logo" >HTML</li>
                        <li className="logo" >CSS </li>
                        <li className="logo" >JavaScript</li>
                        <li className="logo" >React</li>
                        <li className="logo" >Express</li>
                        <li className="logo" >MySQL</li>
                        <li className="logo" >MongoDB</li>
                        <li className="logo" >Node.js</li>
                    </ul>
                </div>
            </div>
        </div>
        /* // <section className="about-me-section">
        //     <div className="container">
        //         <div className="row d-flex justify-content-around mb-10 h-100" id="about-me-row">
        //             <div className="col-12 col-md-5 col-lg-5 about-me-box align-self-center" id="bio-box">
        //                 <h2 id="bio-header">Bio</h2>
        //                 <ul id="bio-text">
        //                     <li>Minneapolis, MN</li>
        //                     <li>Therapist turned programmer</li>
        //                     <li>Minneapolis, MN</li>
        //                     <li>Therapist turned programmer</li>
        //                     <li>Minneapolis, MN</li>
        //                     <li>Therapist turned programmer</li>
        //                     <li>Minneapolis, MN</li>
        //                     <li>Therapist turned programmer</li>
        //                     <li>Therapist turned programmer</li>
        //                 </ul>
        //         </div>
        //             <div className="col-12 col-md-5 col-lg-5 align-self-center" id="bio-picture-box">
        //                 <div className="row justify-content-around" id="picture-row">
        //                     <div className="col-5" id="picture-box">
        //                         <img src={portrait1} alt="potrait of Kelsey"/>
        //                 </div>
        //                     <div className="col-5" id="picture-box">
        //                         <img src={portrait1} alt="potrait of Kelsey"/>
        //                 </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section> */
    );
}

export default About;