import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
  // !document.getElementById('toggle-button')
  const togglebuttonref = useRef();
  // !document.getElementById('Navbar-links')
  const navbarlinksref = useRef();

  // !function that active or disactive Navbar-links display property
  const ReactiveNavBar = () => {
    if (togglebuttonref) {
      navbarlinksref.current.classList.toggle("active");
    }
  };

  // ? end of logic  html and css ↓↓↓↓

  return (
    <div className="app">
      <div className="Navbar">
        <Link to="">
          <div className="brand-title">Portfolio</div>
        </Link>

        <a
          href={() => false}
          ref={togglebuttonref}
          on
          onClick={ReactiveNavBar}
          className="toggle-button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <div ref={navbarlinksref} className="Navbar-links">
          <ul>
            <Link to="design">
              <li>Design</li>
            </Link>

            <Link to="dev">
              <li>Development</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

/*
Example of list for routing
<Link to="portfolio/about">
    <li>About</li>
</Link>
*/
