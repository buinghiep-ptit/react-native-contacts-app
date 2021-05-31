import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, Text, View } from 'react-native';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeName';
import Container from '../components/common/Container';
import SideMenu from './SideMenu';

const getDrawContent = (navigation) => {
    return <SideMenu navigation={navigation} />
}

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
       <Drawer.Navigator 
        drawerType="slide"
        drawerContent={({navigation}) => getDrawContent(navigation) }
        >
           <Drawer.Screen name={HOME_NAVIGATOR} component={ HomeNavigator }></Drawer.Screen>
       </Drawer.Navigator>
    );
}

export default DrawerNavigator;