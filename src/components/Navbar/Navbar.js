import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p>KELSEY SANDERSON</p>
      <div>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
              </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
              </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar