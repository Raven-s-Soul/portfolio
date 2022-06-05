import '../App.css';
import React from 'react'
import Picture from "../images/PictureAbout.png"

function Home() {
  return (
    <div className="App">
        <br/>
        <div className='container'>
            <div className='left'>
                <img src={Picture}  width="50%"    alt="A young cool bald guy in a suit" />
            </div>
            <div className='abtext'>
                <h2>Hello, I'm <font color="#b10000" >S</font>ario <font color="#b10000" >T</font>edesco.<br/></h2>

                Hi, I'm Sario Tedesco! I'm a Computer Science and Telecommunications (expert).<br/>
                I live in Italy, and my greatest passions are Videogames and Anime.<br/>
                I've always connected with Computer Science, which made me explore by autodidact many types of Arts, from drawing to video editing and VFX.
                All of these experiences helped me a lot when I chose to enter the Game Industry.<br/>
                <br/>
                I'm a big fan of FPS games; I played competitively, but I chose to retire pretty early to focus on my studies, and when I got a bit of free time, I started coaching teams.<br/>
                <br/>
                I like free space activities, especially when with other people, but what I like the most is doing great teamwork, and I like it even more when everyone works perfectly with others that look like some gears inside a pocket watch.
            </div>
        </div>
    </div>
  );
}

export default Home;
