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

                <Link to="design">
                    <li>Design</li>
                </Link>

                <Link to="dev">
                    <li>Dev</li>
                </Link>

                <Link to="about">
                    <li>About</li>
                </Link>

            </ul>
        </div>
    </div>
  );
}

export default Navbar;
