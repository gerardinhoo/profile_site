import React, { useEffect, useState } from "react";
import "./profile.css";

const Profile = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=35")
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
        // this.setState({ names: names });
        setNames(names);
        console.log("Names:" + names);
      });
  }, []);

  // componentDidMount() {
  //   fetch("https://randomuser.me/api/?results=40")
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       let names = data.results.map(name => {
  //         return (
  //           <div key={name.results} className="profile">
  //             <h4 className="name">
  //               {name.name.first} {name.name.last}
  //             </h4>
  //             <br />
  //             <img src={name.picture.large} alt="pic" />
  //           </div>
  //         );
  //       });
  //       setNames(setNames)
  //       // this.setState({ names: names });
  //       console.log(names);
  //     });
  // }

  return (
    <div>
      <h2 className="user">Profile Users</h2>
      <h4 className="list">A list of random profile users</h4>
      {names}
      {/* {names} */}
      {/* {this.state.names} */}
    </div>
  );
};

export default Profile;
