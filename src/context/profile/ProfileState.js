import React, { useReducer, useEffect } from "react";
import ProfileContext from "./profileContext";
import ProfileReducer from "./profileReducer";
import { GET_NAME } from "../types";

const ProfileState = props => {
  const initialState = {
    names: []
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

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

        dispatch({
          type: GET_NAME,
          payload: names
        });
        // this.setState({ names: names });
        // setNames(names);
        // console.log("Names:" + names);
      });
  }, []);

  // Get Names

  return (
    <ProfileContext.Provider
      value={{
        names: state.names
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
