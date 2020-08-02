import React from "react";

function Match(props) {
    return(
      <div id="match">
        <div className='Match'>
          <h1> It's a match!</h1> 
        </div>
        <div className="RestaurantInfo-Name">
            <h1>{props.name}</h1>
         </div>
        <img
            className="img"
            src={props.imgURL}
            alt={props.name}
          />
        <div className="RestaurantInfo-Loc">
            <h2> Address: {props.location} </h2>
        </div>
        <p> ♡ </p> 
      </div>
    );
  }

export default Match;