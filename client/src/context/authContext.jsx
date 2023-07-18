import { createContext, useReducer, useEffect } from 'react';

// create a context object 
export const AuthContext = createContext();

// create a reducer function to update the state

export const authReducer = (state, action) => {
    switch (action.type) { // action.type is either "LOGIN" or "LOGOUT"
        case "LOGIN": // if action.type is "LOGIN"
            return {
                user: action.payload, // action.payload is the user object
            };
        case "LOGOUT": // if action.type is "LOGOUT"
            return {
                user: null, // set the user to null
            };
        default:
            return state; // if action.type is neither "LOGIN" nor "LOGOUT", return the state
    }
};

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(authReducer, { user: null });

    useEffect(() => {
        //  get the user from local storage if it exists
        const user = JSON.parse(localStorage.getItem("kickz"));

        //  if the user exists update the authContext state
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, []);

    console.log('authContext state:', state);

    return (
        // value is the object that contains the state and the dispatch function to update the state
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
