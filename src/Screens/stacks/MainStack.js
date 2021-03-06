import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../Screens/Preload';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import MainTab from './MainTab';

const Routes = createAppContainer(
    createStackNavigator({
      Preload: Preload,
      SignIn: SignIn,
      SignUp:SignUp,
      MainTab:MainTab
    })
  );
  
  export default Routes;

export default () => (
<Stack.Navigator>
    
    screenOptions={{
        headerShown = false
    }}
    <Stack.Screen name= "Preload" component={Preload} />
    <Stack.Screen name= "SignIn" component={SignIn} />
    <Stack.Screen name= "SignUp" component={SignUp} />    
    <Stack.Screen name= "MainTab" component={MainTab} /> 
</Stack.Navigator>
);