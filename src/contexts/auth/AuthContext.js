import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer } from '../../reducers/auth/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [auth, dispatch] = useReducer(authReducer, {}, () => {
        const localData = localStorage.getItem('auth');
        return localData ? JSON.parse(localData) : {
            token: null,
            refresh_token: null
        };
    });

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
      }, [auth]);

    return ( 
        <AuthContext.Provider value={{ auth, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;
