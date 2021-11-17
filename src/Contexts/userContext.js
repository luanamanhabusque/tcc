import React, {createContext, useReducer} from "react";
import {initialState, userReducer} from '../Reduces/userReducer';

export const userContext = createContext();

export default ({children}) => {

    const [state, dispatch] = useReducer(userReducer,initialState);

    return(
        <userContext.Provider value = {{state,dispatch}}>
            {children}
        </userContext.Provider>
    );
}