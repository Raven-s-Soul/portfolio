import '../App.css';
import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
        <div className='Navbar'>

            <Link to="portfolio/">
            <h2>Portfolio</h2>
            </Link>

            <ul className='Links'>

                <Link to="portfolio/design">
                    <li>Design</li>
                </Link>

                <Link to="portfolio/dev">
                    <li>Dev</li>
                </Link>

                <Link to="portfolio/about">
                    <li>About</li>
                </Link>

            </ul>
        </div>
    </div>
  );
}

export default Navbar;
