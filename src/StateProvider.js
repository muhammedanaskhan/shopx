import React, {createContext, useContext, useReducer} from "react";

//Prepares the data layer
export const StateContext = createContext();

//wrap our App and provide the Data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);




















/*

The useReducer Hook is similar to the useState Hook. 
It allows for custom state logic. 
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

 - The useReducer Hook accepts two arguments.

    useReducer(<reducer>, <initialState>)

    The reducer function contains your custom state logic and 
    the initialState can be a simple value but generally will contain an object.

    The useReducer Hook returns the current stateand a dispatchmethod.
    
    
*/