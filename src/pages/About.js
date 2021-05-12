import React from "react";
import "./about.css";
import portraitone from "../images/portraitone.JPG"
import portraittwo from "../images/portraittwo.jpg"
import node from "../images/node.jpg"
import javascript from "../images/js.jpg"
import html from "../images/Html.jpg"
import css from "../images/Css.jpg"
import express from "../images/Express.jpg"
import mysql from "../images/Mysql.jpg"
import sequelize from "../images/Sequelize.jpg"
import react from "../images/React.jpg"
import mongo from "../images/mongodb.jpeg"

function About() {
    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-8 about-me-box">
                    <h2>Bio</h2>
                    <ul id="bio-text">
                        <li>Minneapolis, MN</li>
                        <li>Therapist turned programmer</li>
                        <li>Minneapolis, MN</li>
                        <li>Therapist turned programmer</li>
                        <li>Minneapolis, MN</li>
                        <li>Therapist turned programmer</li>
                        <li>Minneapolis, MN</li>
                        <li>Therapist turned programmer</li>
                        <li>Therapist turned programmer</li>
                    </ul>
                </div>
                <div className="col-3 about-me-box">
                    <h2>Proficient Technologies</h2>
                        <ul id="logos">
                            <li class="logo" ><img src={html} alt="html logo" width="65" height="65" /></li> 
                            <li class="logo" ><img src={css} alt="css logo" width="65" height="65" /></li>
                            <li class="logo" ><img src={javascript} alt="jsavascript logo" width="65" height="65" /></li>
                            <li class="logo" ><img src={react} alt="react logo" width="65" height="65" /></li>
                            <li class="logo" ><img src={express} alt="express logo" width="65" height="65" /></li>  
                            <li class="logo" ><img src={mysql} alt="mysql logo" width="65" height="65" /></li>
                            <li class="logo" ><img src={mongo} alt="sequelize logo" width="75" height="50" />MongoDB</li>
                            <li class="logo" ><img src={node} alt="node.js logo" width="65" height="65" /></li>
                            <li class="logo" ><img src={sequelize} alt="sequelize logo" width="65" height="65" /> Sequelize</li>       
                        </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-3"><img src={portraitone} alt="potrait of Kelsey" className="pic"/></div>
                <div className="col-6 col-md-3"><img src={portraitone} alt="potrait of Kelsey" className="pic"/></div>
                <div className="col-6 col-md-3"><img src={portraittwo} alt="potrait of Kelsey" className="pic"/></div>
                <div className="col-6 col-md-3"><img src={portraittwo} alt="potrait of Kelsey" className="pic"/></div>
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