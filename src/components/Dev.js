import '../App.css';
import React, { Component } from 'react'
//import Card from './card';
import Alicias_AlienAdventure from '../images/Alicia_s_AlienAdventure.png';
import AutAut from '../images/AutAut.png';
//import blockudoku from '../images/Blockudoku.png';
//import blockudoku from '../images/Blockudoku.png';





class Dev extends Component {

  render(){
    return (
      <div className="App">
          <br/>
            <h1>Development</h1>
          <br/>
          <div className='container'>
            <hr/>
            <div className='row g-3'>

              <div className="col-12 col-md-6 col-lg-4" >

                    <div className="card" >
                        <img src={Alicias_AlienAdventure} loading="lazy" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Alicia's Alien Adventure:<br/>Escape from GlurbGlorb!!</h5>
                            <p className="card-text"> That's my 1st ever game project, and jam was a 48h project on Unreal 4, and I worked as a Developer.<br/>
                            We made a 2-player 2D sidescroller game, where Alicia (main character) uses a high-technological assistant Matrix(her self-designed wheelchair) to escape from Glurbglorbian Empire.</p>
                            <a href="https://gitlab.com/sario-tedesco/jam-11-21" className="btn btn-outline-danger">Go check</a>
                        </div>
                    </div>

              </div>

              <div className="col-12 col-md-6 col-lg-4" >

                  <div className="card" >
                      <img src={AutAut} loading="lazy" className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">Aut Aut</h5>
                          <p className="card-text">That's my 2nd game jam, a 48h project on Unreal 4; I worked as a solo dev and did a bit of an artist, like doing the sprite of characters. The game concept is on dualism, so I used the level streaming to run two words and make the player free to complete platform and puzzle levels across two dimensions.</p>
                          <a href="https://globalgamejam.org/2022/games/aut-aut-9" className="btn btn-outline-danger">Go check</a>
                      </div>
                  </div>

              </div>


              <div className="col-12 col-md-6 col-lg-4" >

              </div>

              <div className="col-12 col-md-6 col-lg-4" >



              </div>

              <div className="col-12 col-md-6 col-lg-4" >

              </div>

              <div className="col-12 col-md-6 col-lg-4" >

              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default Dev;
