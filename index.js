import React from 'react';
import { registerRootComponent } from 'expo';
import Routes from './src/Screens/stacks/MainStack';
import Preload from './src/Screens/Preload';
import SignIn from './src/Screens/SignIn';
import { createAppContainer, createStackNavigator } from 'react-navigation';

AppRegistry.registerComponent(appName, () => Routes);

import App from './App.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App);

const Routes = createAppContainer(
    createStackNavigator({
      Preload: Preload,
      SignIn: SignIn,
    })
  );
  
  export default Routes;