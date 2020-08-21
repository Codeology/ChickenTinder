import React from "react";
import { render } from "react-dom";

import Pages from "./Profile"
import Profile from "./Profile";
import Condition from "./Condition";

class Front extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            password: "", 
            location: "noPref",
            shouldRender: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })    
    }

    handleSubmit(event) {
        //check password and match group together 
        //render swipe page 
        // ReactDOM.render(
        //     <Profile />, 
        //     document.getElementById('profile')
        // );
        //this.setState({shouldRender: false});
        //Condition.renderFront = false;
        // return <Condition />;
        var userData = {
            userName: this.state.name,
            userPass: this.state.password,
            userLoc: this.state.location
        }
        return fetch("http://localhost:5000", {
                method: "POST",
                body: JSON.stringify(userData),
            } 
        )
    }

    render() {
        if (this.state.shouldRender) {
            return (
                <div id='frontPage'>
                        <h2>Welcome to</h2>
                        <h1>🔥 chicken tinder 🔥</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.name}
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                type="password"
                                value={this.state.password}
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label>Where would you like to eat?</label>
                            <select
                                value={this.state.location}
                                onChange={this.handleChange}
                                name="location"
                            >
                                <option value="southSide">South Side</option>
                                <option value="northSide">North Side</option>
                                <option value="elmwood">Elmwood</option>
                                <option value="downtown">Downtown Berkeley</option>
                                <option value="noPref">No preference</option>
                            </select>
                            <br />
                            <button>Submit</button>
                        </form>
                        <br/>
                        <br/>
                        <p> ♡ </p>
                </div>
            );
        } else {
            return (null);
        }
    }
  }



export default Front;