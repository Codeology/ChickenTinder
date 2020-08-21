import React from "react"
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Profile from "./Profile";
import Match from "./Match";
import Front from "./Front";

//fill with backend data 






// function Condition (props) {
//     // fetch("http://localhost:3000")
//     //     .then(data => profile = data);
//     // var profile = {};

//         var profile = {
//             name: 'Sliver Pizzeria',
//             imgURL: 'https://hoodline.imgix.net/uploads/story/image/213584/SLIVER_Pizzeria_Photo_1_Enhanced.jpg?auto=format',
//             rating: '4.5 stars',
//             location: '2468 Telegraph Ave.',
//             match: false
//           };

//     if(profile.match) {
//         return <Match 
//                   name={profile.name}
//                   imgURL={profile.imgURL}
//                   rating={profile.rating}
//                   location={profile.location}
//                   />; 
//     } else {
//         return <Profile  
//                   name={profile.name}
//                   imgURL={profile.imgURL}
//                   rating={profile.rating}
//                   location={profile.location}
//                   />;
//     }
// }

class Condition extends React.Component{
    constructor() {
        super();
        this.restaurant = {};
        this.createRestaurantObject = this.createRestaurantObject.bind(this);
    }

    createRestaurantObject(data) {
        this.restaurant = data;
    }

    render() {
        // var profile = {
        //     name: 'Sliver Pizzeria',
        //     imgURL: 'https://hoodline.imgix.net/uploads/story/image/213584/SLIVER_Pizzeria_Photo_1_Enhanced.jpg?auto=format',
        //     rating: '4.5 stars',
        //     location: '2468 Telegraph Ave.',
        //     match: false,
        //     front: false
        //   };
        
        // fetch("http://localhost:5000")
        //     .then(data => {this.createRestaurantObject(data)});
        

            return (<div>
                        
                        <Profile  
                        name={this.restaurant.name}
                        imgURL={this.restaurant.imgURL}
                        rating={this.restaurant.rating}
                        location={this.restaurant.location}
                        />
                      </div>);
    }
}

// ReactDOM.render(
//     <Condition />, 
//     document.getElementById('profile')
// )

export default Condition;