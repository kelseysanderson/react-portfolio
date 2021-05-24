import React from "react";
import modernMornings from "../images/modern-mornings.jpg";
import techBlog from "../images/tech-blog.jpg";
import userDirectory from "../images/user-directory-screencapture.jpg";
import weatherDashboard from "../images/weather.jpg";
import teamProfile from "../images/teamscreencapture.jpg";
import fitnessTracker from "../images/stats-page.jpg";
import gin from "../images/home-page-gin.jpg";
import { Carousel } from '3d-react-carousal';
import "./project.css";

function Projects() {
    let slides = [
        <div>
            <a href="https://ancient-reaches-71318.herokuapp.com/">
                <img className="project-img" src={gin} alt="gin-screenshot" />
                <h2 className="project-title">GIN</h2>
                <p className="project-description">Mongo, Express, React, Node.js, bcrypt, Bootstrap socket.io</p>
                <p className="project-paragraph project-description">An app developed using the MERN stack. A user can login and play a game of gin rummy with another online player using socket.io. The user will also be able to view their past game statistics.</p>
            </a>
        </div>,
        <div>
            <a href="https://kelseysanderson.github.io/user_directory/">
                <img className="project-img" src={userDirectory} alt="user directory screenshot" ></img>
                <h2 className="project-title">USER DIRECTORY</h2>
                <p className="project-description">React, HTML, CSS </p>
                <p className="project-paragraph project-description">An app developed using React that allows a user to view their entire employee directory with a search function that allows them to quickly access to employee information.</p>
            </a>
        </div>,
        <div>
            <a href="https://radiant-plains-87467.herokuapp.com/">
                <img className="project-img" src={techBlog} alt="tech blog screenshot" />
                <h2 className="project-title">TECH BLOG</h2>
                <p className="project-description">JavaScript, Node.js, Express, MySQL, Handlebars, CSS, Bootstrap   </p>
                <p className="project-paragraph project-description">A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This application uses the MVC organizational system.</p>
            </a>
        </div>,
        <div>
            <a href="https://kelseysanderson.github.io/weather_dashboard/">
                <img className="project-img" src={weatherDashboard} alt="weather dashboard screenshot" />
                <h2 className="project-title">WEATHER DASHBOARD</h2>
                <p className="project-description">JavaScript, jQuery, Jest, OpenWeather API, HTML, CSS, Bootstrap  </p>
                <p className="project-paragraph project-description">A dashboard to search for current and future weather forecasts by city. Cities previously searched are saved to local storage and are then generated into a button to make future searches simple.</p>
            </a>
        </div>,
        <div>
            <a href="https://github.com/kelseysanderson/team_profile_generator">
                <img className="project-img" src={teamProfile} alt="profile generator screenshot" />
                <h2 className="project-title">TEAM PROFILE GENERATOR</h2>
                <p className="project-description">JavaScript, Node.js, Jest, HTML, CSS, Bootstrap </p>
                <p className="project-paragraph project-description">An application developed using node and inquirer to dynamically create a work team website based on user input.</p>
            </a>
        </div>,
        <div>
            <a href="https://slee612.github.io/group_project_1/">
                <img  className="project-img" src={modernMornings} alt="Modern Mornings webpage screenshot" />
                <h2 className="project-title">MODERN MORNINGS</h2>
                <p className="project-description">JavaScript, jQuery, Reddit API, GNews API, HTML, CSS, Bootstrap </p>
                <p className="project-paragraph project-description">A modern take on a newspaper that includes a search function to filter results and a section with reddit memes related to the search along with an interactive sudoku puzzle.</p>
            </a>
        </div>,
        <div>
            <a href="https://fitness-tracker-ksanderson.herokuapp.com/?id=608cdb8eca6bdc0015c60418">
                <img  className="project-img" src={fitnessTracker} alt="fitness tracker screenshot" />
                <h2 className="project-title">FITNESS TRACKER (backend)</h2>
                <p className="project-description">JavaScript, Express, Node.js, MongoDB, HTML, CSS  </p>
                <p className="project-paragraph project-description">A workout tracker created using Express to handle routing, and Mongo database.</p>
            </a>
        </div>,];

    return (
        <div className="container-fluid">
            <Carousel slides={slides} autoplay={true} interval={8000} />
        </div>
    )
}

export default Projects;
