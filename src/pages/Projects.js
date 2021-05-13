import React from "react";
import modernMornings from "../images/modern-mornings.jpg"
import techBlog from "../images/tech-blog.jpg"
import userDirectory from "../images/user-directory-screencapture.jpg"
import weatherDashboard from "../images/weather.jpg"
import teamProfile from "../images/teamscreencapture.jpg"
import fitnessTracker from "../images/stats-page.jpg"
import {Carousel} from '3d-react-carousal';
import "./project.css"

function Projects() {
    let slides = [
        <div>
            <a href="https://kelseysanderson.github.io/user_directory/">
            <img  src={userDirectory} alt="1" ></img>
            <p className="project-description">React, HTML, CSS </p>
            </a>
        </div>,
        <div>
            <a href="https://radiant-plains-87467.herokuapp.com/">
            <img  src={techBlog} alt="2" />
            <p className="project-description">JavaScript, Node.js, Express, MySQL, Handlebars, CSS, Bootstrap   </p>
            </a>
        </div>,
         <div>
             <a href="https://kelseysanderson.github.io/weather_dashboard/">
            <img  src={weatherDashboard} alt="2" />
            <p className="project-description">JavaScript, jQuery, Jest, OpenWeather API, HTML, CSS, Bootstrap  </p>
            </a>
        </div>,
        <div>
            <a href="https://github.com/kelseysanderson/team_profile_generator">
            <img  src={teamProfile} alt="2" />
            <p className="project-description">JavaScript, Node.js, Jest, HTML, CSS, Bootstrap </p>
            </a>
        </div>,
        <div>
            <a href="https://slee612.github.io/group_project_1/">
            <img  src={modernMornings} alt="2" />
            <p className="project-description">JavaScript, jQuery, Reddit API, GNews API, HTML, CSS, Bootstrap </p>
            </a>
        </div>,
        <div>
            <a href="https://fitness-tracker-ksanderson.herokuapp.com/?id=608cdb8eca6bdc0015c60418">
            <img  src={fitnessTracker} alt="2" />
            <p className="project-description">JavaScript, Express, Node.js, MongoDB, HTML, CSS  </p>
            </a>
        </div>,   ];
    
    return(
        <div className="container-fluid">
            <Carousel slides={slides} autoplay={true} interval={6000}/>
        </div>
    )
}

export default Projects;
