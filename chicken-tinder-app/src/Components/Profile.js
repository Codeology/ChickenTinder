import React from "react";
import { render } from "react-dom";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            match: 0
        }
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
                    <form>
                    <input type="submit" name='swipe' value="Let's go!" onclick="" method="POST" action="/"/>
                    <input type="submit" name='swipe' value="Not Interested." onclick="" method="POST" action="/"/>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;