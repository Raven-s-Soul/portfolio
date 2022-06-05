import '../App.css';
import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
        <div className='Navbar'>

            <Link to="portfolio/">
            <h2 style={{textdecoration:"none", color:"white"}}>Portfolio</h2>
            </Link>

            <ul className='Links'>

                    <div className='paddingtop'>
                        <Link to="portfolio/design">
                            <li>Design</li>
                        </Link>
                    </div>

                    <div className='paddingtop'>
                        <Link to="portfolio/dev">
                            <li>Development</li>
                        </Link>
                    </div>

                    <div className='paddingtop'>
                        <Link to="portfolio/about">
                            <li>About</li>
                        </Link>
                    </div>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
