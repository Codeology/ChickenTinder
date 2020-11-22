import React from "react"
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Profile from "./Profile";
import Match from "./Match";
import Front from "./Front";


class Condition extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            password: "", 
            location: "noPref",
            startUp : true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })  
    }

    async handleSubmit(event) {
        //check password and match group together 
        //render swipe page 
        // ReactDOM.render(
        //     <Profile />, 
        //     document.getElementById('profile')
        // );
        //this.setState({shouldRender: false});
        //Condition.renderFront = false;
        // return <Condition />;
        event.preventDefault();
        let response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state),
            } 
        )
        let data = await response.json();
        data = JSON.stringify(data);
        data = JSON.parse(data); //in backend we want to check for the user data and return that they should start swiping
        console.log(data)
        this.setState({
            startUp : data['startUp']
        })
    }
    
    render() {
        if (this.state.startUp) {
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
                                <option value="South Side">South Side</option>
                                <option value="North Side">North Side</option>
                                <option value="Elmwood">Elmwood</option>
                                <option value="Downtown">Downtown Berkeley</option>
                                <option value="noPref">No preference</option>
                            </select>
                            <br />
                            <button>Submit</button>
                        </form>
                        <br/>
                        <br/>
                        <p> ♡ </p>
                </div>
            )
        }
            return (<div>
                        <Profile pref={this.state.location}/>
                    </div>);
    }
}


export default Condition;