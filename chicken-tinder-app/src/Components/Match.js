import React from "react";
import { render } from "react-dom";

class Match extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div id="match">
                <div className='Match'>
                <h1> It's a match!</h1> 
                </div>
                <div className="RestaurantInfo-Name">
                    <h1>{this.props.name}</h1>
                </div>
                <img
                    className="img"
                    src={this.props.imgURL}
                    alt={this.props.name}
                />
                <div className="RestaurantInfo-Loc">
                    <h2> Address: {this.props.location} </h2>
                </div>
                <p> ♡ </p> 
            </div>
        );
    }
}

export default Match;