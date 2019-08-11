import React, { useReducer } from "react";
import ProfileContext from "./profileContext";
import ProfileReducer from "./profileReducer";
import { GET_NAME } from "../types";

const ProfileState = props => {
  const initialState = {
    names: []
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

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
