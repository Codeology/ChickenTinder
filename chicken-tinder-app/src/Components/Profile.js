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
    constructor(props) {
        super(props);
        this.restaurant = {}
        this.state = {
            restaurant : {},
            count: 0,
            match: false,
            pref: this.props.pref
        }
        this.createRestaurantObject = this.createRestaurantObject.bind(this);
    }

    createRestaurantObject(data) {
        this.setState({restaurant : data});
    }
    //handleClick method 
      //Checks if a match 
      //If yes, render match page 
      //If no, make next API call and re-populate that page with new restuarant 
    // afterSubmit(event) {
    //     event.preventDefault();
    //     console.log("hiiii")
    //     let state = this.setState;
    //     fetch("http://localhost:5000", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/html'
    //             }
    //         } 
    //     ).then(function(response) {
    //         console.log(response.headers.get('Content-Length'))
    //         response.json().then(v => {
    //             console.log(v[0]);
    //             state({restaurant: v});
    //         })
    //     })
        
    // }

    async afterSubmitNo(event) {
        event.preventDefault();
        this.setState({
            count : this.state.count + 1
        })
        let response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            } 
        )
        //console.log(event);
        let data = await response.json();
        data = JSON.stringify(data);
        data = JSON.parse(data);
        //console.log(data)
        this.createRestaurantObject(data);
        console.log(this.restaurant.NAME);
    }

    async afterSubmitYes(event) {
        event.preventDefault();
        this.setState({
            count : this.state.count - 1
        })
        this.setState({match : true});
        // let response = await fetch("http://localhost:5000", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(this.state)
        //     } 
        // )
        // console.log(event);
        // let data = await response.json();
        // data = JSON.stringify(data);
        // data = JSON.parse(data);
        // console.log(data)
        // this.createRestaurantObject(data);
        // console.log(this.restaurant.NAME);
    }

    render() {
        if (this.state.match) {
            return (
                <Match 
                name={this.state.restaurant.NAME}
                imgURL={this.state.restaurant.PICTURE}
                rating={this.state.restaurant.YELP_RATING}
                location={this.state.restaurant.LOCATION}
                />
            )
        }
        if (Object.keys(this.state.restaurant).length === 0) {
            console.log('hello')
            return(
                <div>
                    <p>How to play:</p>
                    <p> 1. Swipe right if you wanna eat at the restaurant. 
                        2. Swipe left if you don't! 
                        I hope you're hungry! 
                        Ready to start swiping?
                    </p>
                    <div>
                        <form onSubmit={e => this.afterSubmitNo(e)}>
                        <input type="submit" name='swipe' value="I'm ready!"/>
                        </form>
                    </div>
                </div>
            )
        } else {
            console.log(this.state)
        return (
            
            <div className="Profile">
                <div className="RestaurantInfo">
                <img
                    className="img"
                    src={this.state.restaurant.PICTURE}
                    alt={this.state.restaurant.NAME}
                />
                <div className="RestaurantInfo-Name">
                    {this.state.restaurant.NAME}
                </div>
                <div className="RestaurantInfo-Rating">
                    {this.state.restaurant.YELP_RATING}
                </div>
                <div className="RestaurantInfo-Loc">
                    {this.state.restaurant.LOCATION}
                </div>
                <div>
                    <form onSubmit={e => this.afterSubmitYes(e)}>
                    <input type="submit" name='swipe' value="Let's go!"/>
                    </form>
                    <form onSubmit={e => this.afterSubmitNo(e)}>
                    <input type="submit" name='swipe' value="Not Interested."/>
                    </form>
                </div>
                </div>
            </div>
        );
        }
    }
}

export default Profile;