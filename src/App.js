import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

// Components for different pages
import Home from "./Home";
import Tech from "./Tech";
import Idols from "./Idols";
import Blogs from "./Blogs";
import Inspirations from "./Inspirations";
import School from "./School";
import Stuff from "./Stuff";
import About from "./About";
import Contacts from "./Contacts";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="background">
      <Router>
        <div className="navbar-container">
          <nav className="navbar">
            {/* <div className="nav-left">
              <Link
                to="/"
                className={currentPage === "home" ? "active" : ""}
                onClick={() => handleNavLinkClick("home")}
              >
                <div className="circle">L.D</div>
              </Link>
            </div> */}
            <div className="nav-middle">
              <Link
                to="/"
                className={currentPage === "home" ? "active" : ""}
                onClick={() => handleNavLinkClick("home")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={currentPage === "about" ? "active" : ""}
                onClick={() => handleNavLinkClick("about")}
              >
                About
              </Link>
              <Link
                to="/stuff"
                className={currentPage === "stuff" ? "active" : ""}
                onClick={() => handleNavLinkClick("stuff")}
              >
                Stuff
              </Link>
              <Link
                to="/contacts"
                className={currentPage === "contacts" ? "active" : ""}
                onClick={() => handleNavLinkClick("contacts")}
              >
                Contacts
              </Link>
            </div>
            {/* <div className="nav-right">
              <div className="circle">Br</div>
            </div> */}
          </nav>
        </div>

        <Routes>
          <Route path="/tech" element={<Tech />} />
          <Route path="/idols" element={<Idols />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/inspirations" element={<Inspirations />} />
          <Route path="/school" element={<School />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
