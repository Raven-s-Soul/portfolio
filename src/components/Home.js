import "../App.css";
import React from "react";
import Picture from "../images/PictureAbout.png";

function Home() {
  return (
    <div className="page">
      <div className="pageTitle" />
      <div className="container">
        <img
          src={Picture}
          className="leftImg"
          alt="A young cool bald guy in a suit"
        />
        <div className="abtext">
          <h2>
            <font color="#870101">S</font>ario <font color="#870101">T</font>
            edesco
          </h2>
          Hi, I'm Sario Tedesco! I'm a Computer Science and Telecommunications
          expert.
          <br /> I live in Italy, and my greatest passions are Videogames and
          Anime. I've always connected with Computer Science, which made me
          explore by autodidact many types of Arts, from drawing to video
          editing and VFX. All of these experiences helped me a lot when I chose
          to enter the Game Industry.
          <br />
          I'm a big fan of FPS games; I played competitively, but I chose to
          retire pretty early to focus on my studies, and when I got a bit of
          free time, I started coaching teams.
          <br />I like free space activities, especially when with other people,
          but what I like the most is doing great teamwork, and I like it even
          more when everyone works perfectly with others that look like some
          gears inside a pocket watch.
        </div>
      </div>
      <div className="container2">
        <div className="GoTo">
          <h3>Designs</h3>
          <br />
          <button className="btn btn-outline-danger">Design</button>
        </div>
        <div className="GoTo">
          <h3>Projects and past works!</h3>
          <br />
          <button className="btn btn-outline-danger">Development</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
