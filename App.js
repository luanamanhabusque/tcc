import  React from 'react';

import { StyleSheet, Text, View } from 'react-native';
//import UserContextProvider from './src/Contexts/userContext';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text>App.js</Text>

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

