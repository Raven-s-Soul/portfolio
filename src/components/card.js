import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col">
        <div className="card" style={{ maxWidth: "30vh", minWidth: "30vh" }}>
          <img src={this.props.Img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.Title}</h5>
            <p className="card-text">{this.props.Description}</p>
            <a href=" " className="btn btn-outline-danger">
              Go check
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;

/*
class Card extends Component {
    render(){
        return(
            <div className="col" >
                <div className="card" style={{maxWidth: "30vh", minWidth:"30vh"}}>
                    <img src={this.props.card.Img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.Title}</h5>
                        <p className="card-text">{this.props.card.Description}</p>
                        <a href="https://google.com" className="btn btn-outline-danger">Go check</a>
                    </div>
                </div>
            </div>
        )
    }
}



onClick={this.openLink}


openLink() {
  window.open(this.props.Link);
}



*/
