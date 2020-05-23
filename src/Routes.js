import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import App from './App.js';
import Inicial from './Inicial.js';

const Routes = createAppContainer(
  createStackNavigator({
    Home: App,
    About: Inicial,
  }),
);

export default Routes;
