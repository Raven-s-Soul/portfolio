import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Picture from "../images/PictureAbout.png";

function Home() {
  return (
    //! className="homepage" => Logo  | className="page" => No Logo
    <div className="homepage">
      <div className="pageTitle container-Blur" />
      <div className="container container-Blur">
        <img
          src={Picture}
          className="leftImg"
          alt="A cool young bold guy in a suit"
        />
        <div className="abtext">
          <h2>
            <font color="#b10000 ">S</font>ario <font color="#b10000 ">T</font>
            edesco
          </h2>
          Hi, I'm Raven's Soul! I'm a Computer Science and Telecommunications
          expert.
          <br />I live in Italy, and my greatest passions are Videogames and
          Anime. I've always connected with Computer Science, which made me
          explore autodidact many types of Arts, from drawing to video editing
          and VFX.
          <br />
          I'm a big fan of FPS games; I played competitively, but I chose to
          retire pretty early to focus on my studies, and when I got a bit of
          free time, I started coaching teams.
          <br />I like free space activities and esports, especially with other
          people, but what I like the most doing great teamwork, and I like it
          even more when everyone works perfectly with others that look like
          gears inside a pocket watch.
        </div>
      </div>
      <div className="container2">
        {/* //!TODO left pice? */}
        <div className="container3">
          <Link to="design" className="wrapperGoTo GoTo-Design">
            <button type="button" className="customBtn customBtn-mirrors">
              <div className="textToGo">More about my Design Projects</div>
            </button>
          </Link>
          <Link to="dev" className="wrapperGoTo GoTo-Dev">
            <button type="button" className="customBtn customBtn-mirrors">
              <div className="textToGo">More about my Game Projects</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
