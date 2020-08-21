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
        this.restaurant = {};
        this.createRestaurantObject = this.createRestaurantObject.bind(this);
    }

    createRestaurantObject(data) {
        this.restaurant = data;
    }
    //handleClick method 
      //Checks if a match 
      //If yes, render match page 
      //If no, make next API call and re-populate that page with new restuarant 
    afterSubmit(event) {
        console.log("hiiii")
        fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            } 
        ).then(function(response) {
            console.log(response.headers.get('Content-Length'))
            console.log(response)
        })
            //.then(data => {this.createRestaurantObject(data)})
            .then(data => console.log(data));
        event.preventDefault();
    }

    render() {
        if (this.restaurant.match) {
            return (
                <Match 
                name={this.restaurant.name}
                imgURL={this.restaurant.imgURL}
                rating={this.restaurant.rating}
                location={this.restaurant.location}
                />
            )
        }
        return (
            <div className="Profile">
                <div className="RestaurantInfo">
                <img
                    className="img"
                    src={this.restaurant.imgURL}
                    alt={this.restaurant.name}
                />
                <div className="RestaurantInfo-Name">
                    {this.restaurant.name}
                </div>
                <div className="RestaurantInfo-Rating">
                    {this.restaurant.rating}
                </div>
                <div className="RestaurantInfo-Loc">
                    {this.restaurant.location}
                </div>
                <div>
                    <form onSubmit={this.afterSubmit}>
                    <input type="submit" name='swipe' value="Let's go!"/>
                    <input type="submit" name='swipe' value="Not Interested."/>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;