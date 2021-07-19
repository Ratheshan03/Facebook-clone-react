import React, { createContext, useContext, useReducer } from "react";

import reducer, { initialState } from "./reducer";

export const StateContext = createContext();

//higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
