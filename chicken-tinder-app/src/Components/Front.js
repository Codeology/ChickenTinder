import React from "react";

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
  }

var startUp = 1;

function UpdateStartUpVar() {
  startUp = 0;
}

export default Front;