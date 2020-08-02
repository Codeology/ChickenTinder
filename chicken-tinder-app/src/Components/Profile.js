import React from "react";

function Profile(props) {
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

var match = 0;

export default Profile;