import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Profile from './Components/Profile';
import Front from './Components/Front';
import Match from './Components/Match';

/*function Profile(props) {
  return (
    <div className="Profile">
      <div className="RestaurantInfo">
        <img
          className="img"
          src={props.imgURL}
          alt={props.name}
        />
        <div className="RestaurantInfo-Name">
          {props.name}
        </div>
        <div className="RestaurantInfo-Rating">
          {props.rating}
        </div>
        <div className="RestaurantInfo-Loc">
          {props.location}
        </div>
        <div>
          <form>
          <input type="submit" name='swipe' value="Let's go!" onclick="" method="POST" action="/"/>
          <input type="submit" name='swipe' value="Not Interested." onclick="" method="POST" action="/"/>
          </form>
        </div>
      </div>
    </div>
  );
}

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

function Front(props) {
  return (
    <div id='frontPage'>
            <h2>Welcome to</h2>
            <h1>🔥 chicken tinder 🔥</h1>
            <form action="/" method="POST">
                <label for='name'><b>Name:</b></label>
                <input type="text" id='name' name='name' placeholder="Please enter your name" required/>
                <br/>
                <label for='password'><b>Password:</b></label>
                <input type="password" id='password' name='password' placeholder="Please enter your group's password" required/>
                <br/>
                <label for='location'><b>Where would you like to eat?</b></label>
                <select name="location" id='location'>
                    <option value='northside'>Northside</option>
                    <option value='southside'>Southside</option>
                    <option value='downtown'>Downtown Berkeley</option>
                    <option value='elmwood'>Elmwood</option>
                    <option value='no-pref'>No preference</option>
                </select>
                <br/>
                <br/>
                <input type="submit" name='start' value="Get Started ➔" onclick={UpdateStartUpVar}/>
            </form>
            <br/>
            <br/>
            <p> ♡ </p>
        </div>
  );
}*/

var profile = {
  name: 'Sliver Pizzeria',
  imgURL: 'https://hoodline.imgix.net/uploads/story/image/213584/SLIVER_Pizzeria_Photo_1_Enhanced.jpg?auto=format',
  rating: '4.5 stars',
  location: '2468 Telegraph Ave.',
};

var startUp = 1;
var match = 0;

function UpdateStartUpVar() {
  startUp = 0;
}

if (!match && !startUp) {
  ReactDOM.render(
    <Profile
      name={profile.name}
      imgURL={profile.imgURL}
      rating={profile.rating}
      location={profile.location}
    />,
    document.getElementById('profile')
  );
} else if (match && !startUp) {
  ReactDOM.render(
    <Match
    name={profile.name}
    imgURL={profile.imgURL}
    rating={profile.rating}
    location={profile.location}
    />,
    document.getElementById('match')
  );
} else if (!match && startUp) {
  ReactDOM.render(<Front/>,
    document.getElementById('frontPage')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
