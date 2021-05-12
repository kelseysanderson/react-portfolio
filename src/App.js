import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
