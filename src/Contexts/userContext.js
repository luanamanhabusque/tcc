import React, {createContext, useReducer} from "react";
import {initialState, userReducer} from '../Reduces/userReducer';

export const userContext = createContext();

export default ({children}) => {

    const [state, dispatch] = useReducer(userReducer,initialState);

    return(
        <UserContext.Provider value = {{state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}