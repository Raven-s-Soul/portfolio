import React from "react";

function Card(){
    return(
        <div className="col" >
            <div className="card" styele={{maxwidth: "18rem", textAlign: "center"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-outline-danger">Look at</button>
            </div>
            </div>
        </div>
    )
}
export default Card;