import React from "react";
import { render } from "react-dom";

import Match from "./Match"
import Condition from "./Condition"

var profile = {
    name: 'Sliver Pizzeria',
    imgURL: 'https://hoodline.imgix.net/uploads/story/image/213584/SLIVER_Pizzeria_Photo_1_Enhanced.jpg?auto=format',
    rating: '4.5 stars',
    location: '2468 Telegraph Ave.',
    match: false
  };


class Profile extends React.Component {
    constructor() {
        super();
    }

    //handleClick method 
      //Checks if a match 
      //If yes, render match page 
      //If no, make next API call and re-populate that page with new restuarant 
    afterSubmit(event) {
        //event.preventDefault();
    }

    render() {
        return (
            <div className="Profile">
                <div className="RestaurantInfo">
                <img
                    className="img"
                    src={this.props.imgURL}
                    alt={this.props.name}
                />
                <div className="RestaurantInfo-Name">
                    {this.props.name}
                </div>
                <div className="RestaurantInfo-Rating">
                    {this.props.rating}
                </div>
                <div className="RestaurantInfo-Loc">
                    {this.props.location}
                </div>
                <div>
                    <form onSubmit={this.afterSubmit}>
                    <input type="submit" name='swipe' value="Let's go!" method="POST" action="http://localhost:5000"/>
                    <input type="submit" name='swipe' value="Not Interested." method="POST" action="http://localhost:5000"/>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;