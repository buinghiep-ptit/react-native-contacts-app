import React, {createContext, useReducer} from 'react';
import authInitialState from '../initialsStates/authInitialState';
import contactsInitialState from '../initialsStates/contactsInitialState';
import authReducer from './authReducer';
import contactsReducer from './contactsReducer';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer( authReducer, authInitialState );
    const [contactsState, contactsDispatch] = useReducer( contactsReducer, contactsInitialState );

    return (
        <GlobalContext.Provider 
            value={{authState, contactsState, authDispatch, contactsDispatch}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;