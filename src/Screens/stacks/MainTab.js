import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTab from '../../Components/CustomTab';

import Home from '../Home';
import Appointments from '../Appointments';
import Profile from '../Profile';

const Tab = createBottomTabNavigator;

export default () => {
    <Tab.Navigator tabBar={props=><CustomTab {...props}/>}>

        <Tab.screen name="Home" component={Home}></Tab.screen>
        <Tab.screen name="Appointments" component={Appointments}></Tab.screen>
        <Tab.screen name="Profile" component={Profile}></Tab.screen>
    </Tab.Navigator>
}