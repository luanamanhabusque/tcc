import React from 'react';
import Home from './src/Screens/Home';


import { StyleSheet, Text, View } from 'react-native';
//import UserContextProvider from './src/Contexts/userContext';

export default function App() {

  return (
    <View style = {styles.container}>
      <Home {...Home}></Home>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06D6A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

