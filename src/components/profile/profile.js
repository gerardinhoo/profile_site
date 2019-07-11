import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=40")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let names = data.results.map(name => {
          return (
            <div key={name.results} className="profile">
              <h4 className="name">
                {name.name.first} {name.name.last}
              </h4>
              <br />
              <img src={name.picture.large} alt="pic" />
            </div>
          );
        });

        this.setState({ names: names });
        console.log(this.state.names);
      });
  }

  render() {
    return (
      <div>
        <h2 className="user">Profile Users</h2>
        <h4 className="list">A list of random profile users</h4>
        {this.state.names}
      </div>
    );
  }
}

export default Profile;
