import React from "react"

var profile = {
    name: 'Sliver Pizzeria',
    imgURL: 'https://hoodline.imgix.net/uploads/story/image/213584/SLIVER_Pizzeria_Photo_1_Enhanced.jpg?auto=format',
    rating: '4.5 stars',
    location: '2468 Telegraph Ave.',
  };

class Pages extends React.Component {

    render() {
        if (!Profile.state.match && !Front.state.startUp) {
            ReactDOM.render(
              <Profile
                name={profile.name}
                imgURL={profile.imgURL}
                rating={profile.rating}
                location={profile.location}
              />,
              document.getElementById('profile')
            );
          } else if (Profile.state.match && !Front.state.startUp) {
            ReactDOM.render(
              <Match
              name={profile.name}
              imgURL={profile.imgURL}
              rating={profile.rating}
              location={profile.location}
              />,
              document.getElementById('match')
            );
    }
}