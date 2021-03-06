import React, {useContext, useEffect, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

const AppNavContainer = () => {

    const { 
        authState: {isLoggedIn} 
    } = useContext(GlobalContext);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authLoaded, setAuthLoaded] = useState(false);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if(user) {
                setAuthLoaded(true);
                setIsAuthenticated(true);
            }
            else {
                setAuthLoaded(true);
                setIsAuthenticated(false);
            }

        } catch(error) {}
    };

    useEffect(() => {
        getUser();
    }, [])

    return (
        <>
            {/* { 
                authLoaded ?
                (<NavigationContainer>
                    { isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator /> }
                </NavigationContainer>)
                : (<ActivityIndicator />)
            } */}
               <NavigationContainer>
                   <DrawerNavigator />
                </NavigationContainer>
        </>
      );
}

export default AppNavContainer;