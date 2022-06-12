import '../App.css';
import React from 'react'
import {Link} from "react-router-dom";
import {useRef} from 'react';

function Navbar() {

    //document.getElementById('toggle-button')
    const togglebuttonref = useRef();
    //document.getElementById('navbar-links')
    const navbarlinksref = useRef();

    //function that active or disactive navbar-links display property
    const ReactiveNavBar = () => {
        if(togglebuttonref){
                navbarlinksref.current.classList.toggle('active')
        }
    }

    //end of logic  html and css ↓↓↓↓

  return (
    <div className="App">
        <div className='navbar'>

            <Link to="portfolio/">
            <div className='brand-title'>Portfolio</div>
            </Link>

            <a href={() => false} ref={togglebuttonref} on onClick={ReactiveNavBar} className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>

                <div ref={navbarlinksref} className='navbar-links'>
                    <ul>

                                <Link to="portfolio/design">
                                    <li>Design</li>
                                </Link>

                                <Link to="portfolio/dev">
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