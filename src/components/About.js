import '../App.css';
import React from 'react'
import Picture from "../pictures/PictureAbout.png"

function About() {
  return (
    <div className="App">
        <br/>
        <div className='container'>
            <div className='left'>
                <img src={Picture} width="50%" alt="A young guy in a suit" />
            </div>
            <div className='abtext'>
                <h2>Hello, I'm <font color="#b10000" >S</font>ario <font color="#b10000" >T</font>edesco.<br/></h2>

                Hi, my name is Sario Tedesco! I'm a Computer Science and Telecommunications (expert).<br/>
                I live in Italy, and my greatest passions are Videogames and Anime.<br/>
                I've always connected with Computer Science, which made me explore by autodidact many types of Arts, from drawing to video editing and VFX.<br/>
                All of these experiences helped me a lot when I chose to enter the Game Industry.<br/>
            </div>
        </div>
    </div>
  );
}

export default About;
