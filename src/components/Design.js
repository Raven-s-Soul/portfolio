import '../App.css';
import React, { Component } from 'react'
import Card from './card';
import rpg from '../images/RPG.png';




class Design extends Component {

/*
  state = {cards:[
    {id: 0, Title: "RPG Weapons and Armors", Description: "A quick example how I would balance armors and weapons inside an RPG.", Img: rpg , link:"https://www.google.com"}

  ]
}

// This go under <div className='row'>
{this.state.cards.map(card => (
                <Card
                key={card.id}
                card={card}
                />
              ))
              }
*/

  render(){
    return (
      <div className="App">
          <br/>
            <h1>Design</h1>
          <br/>
          <div className='container'>
            <hr/>
            <div className='row'>

            <Card
            Title="RPG Weapons and Armors"
            Description="A quick example how I would balance armors and weapons inside an RPG."
            Img={rpg}
            Link="www.google.com"
            />


            </div>
          </div>
      </div>
    );
  }
}

export default Design;
