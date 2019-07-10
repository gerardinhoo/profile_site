import React, { Component } from "react";
// import Profile from "./components/profile/profile";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let names = data.results.map(name => {
          return (
            <div key={name.results}>
              <h4>
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
      <div className="App">
        <h2>Profile Site</h2>
        {this.state.names}
      </div>
    );
  }
}

export default App;
