import React from 'react';
import SignIn from './src/Screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from './src/Screens/Preload';
import { Button, View } from 'react-native';
//import UserContextProvider from './src/Contexts/userContext';
//import { StyleSheet } from 'react-native';

export default function SignIn() {
  return (
    <NavigationContainer>
     <div class="w-96">
    <div class="relative bg-green-500 bg-opacity-80" style="width: 375px; height: 667px;">
        <p class="w-36 h-16 absolute text-7xl text-green-900" style="left: 115px; top: 201px;">iPed</p>
        <img class="w-28 h-24 absolute rounded-lg" style="left: 134px; top: 317px;" src="https://via.placeholder.com/106x89"/>
        <img class="w-36 h-36 absolute" style="left: 108px; top: 286px;" src="https://via.placeholder.com/152x150"/>
    </div>
</div>
    </NavigationContainer>
  );

}
function MyStack() {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen> name="SignIn" component{Preload}</Stack.Screen>
      </Stack.Navigator>
  ); 
}

