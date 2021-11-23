import React from 'react'; 
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SplashSign = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <a href="navigation.navigate('SignIn') ">Go to Details</a>
  </View>
);

Page1.navigationOptions = {
  title: 'SignIn',
}

export default Splash;