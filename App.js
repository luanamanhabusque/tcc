import React from 'react';
import SignIn from './src/Screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from './src/Screens/Preload';
import { Button, View } from 'react-native';
//import UserContextProvider from './src/Contexts/userContext';
//import { StyleSheet } from 'react-native';

function Preload({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go"
        onPress={() => navigation.navigate('Preload')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;