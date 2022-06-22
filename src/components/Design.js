import "../App.css";
import React, { Component } from "react";
//import Card from './card';
import blockudoku from "../images/Blockudoku.png";
import fps from "../images/FPS.png";
import rpg from "../images/RPG.png";
import rts from "../images/RTS.png";
import uncertainties from "../images/Uncertainties-EldenRing.png";
import abarei from "../images/Abarei.png";

class Design extends Component {
  /*
  state = {cards:[
    {id: 0, Title: "RPG Weapons and Armors", Description: "A quick example how I would balance armors and weapons inside an RPG.", Img: rpg , link:"https://www.google.com"}

  ]
}

//! This go under <div className='row'>
{this.state.cards.map(card => (
                <Card
                key={card.id}
                card={card}
                />
              ))
              }
*/

  render() {
    return (
      <div className="App">
        <br />
        <h1>Design</h1>
        <br />
        <div className="container">
          <hr />
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={blockudoku}
                  loading="lazy"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mobile Game Design Blockudoku</h5>
                  <p className="card-text">
                    That's how I would like to change the game adding a new game
                    mode, increasing the monetization and the retention.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/presentation/d/13LXzzE1bQXQWuCEluzaY3FD7iOn9y327_Cv6Gy_EHcs/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Go check
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={fps}
                  loading="lazy"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">How I breake down FPS</h5>
                  <p className="card-text">
                    FPS are different from past, now is hard talking about a
                    pure fps, but they got some consistency on the evolving of
                    the genre.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/document/d/1UZokSzlF_SqHq9bQ5SbRD30bFRtQrI0vNn-IE8_vBJ0/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Go check
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/document/d/1v2br63cFN1Fr27bQlx4ygebL2P3CEfKZgT-YCMOefyk/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Italian ver
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={rpg}
                  loading="lazy"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">RPG Weapons and Armors</h5>
                  <p className="card-text">
                    A quick example how I would balance armors and weapons
                    inside an RPG.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/spreadsheets/d/1h74pBPI8Yitim0J-WlAp3KoAd5mpNzeZqNByzFP4IbY/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Go check
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={rts}
                  loading="lazy"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Making a new RTS</h5>
                  <p className="card-text">
                    I made the concept for a new RTS that is based on use only 3
                    enemy.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/document/d/1vrz8qaVik4d4p4G9726KPJpC1O5_sluS0GaHrUUKYSY/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Go check
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/document/d/1mrueTnG4O_p_a1JosZehc33XA5HDcEEEXRGFvZsVLoY/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Italian ver
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={uncertainties}
                  loading="lazy"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Uncertainties inside Elden Ring
                  </h5>
                  <p className="card-text">
                    I tried to found out all the uncertainties inside the title
                    of FromSoftware.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/document/d/1Waezaq-ERABxgMCccBoNBO0U7z15gEsi68_UMBkU89c/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Go check
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://docs.google.com/document/d/1ciF6XcGldduHYx7LSGxSO8yi8HkapPfHjNy-FfulqwQ/edit?usp=sharing"
                      );
                    }}
                    className="btn btn-outline-danger"
                  >
                    Italian ver
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={abarei}
                  loading="lazy"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Abarei GDD</h5>
                  <p className="card-text">
                    That's a Unity Vigamus Academy Project. I worked as a
                    designer and narrative of the game; the game genre is an
                    endless runner where the Abarai seeks the collectibles to
                    gather more power.
                    <br />
                    WIP
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      alert("WIP - Not ready yet!");
                    }}
                    className="btn btn-outline-danger"
                  >
                    Go check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
