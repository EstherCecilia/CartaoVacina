import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Incidents from './App';
import Register from './Registros';
import Detail from './Inicial';
import Calender from './Vacinas';
import Config from './Config';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: true}}>
        <AppStack.Screen name="Login" component={Incidents} />
        <AppStack.Screen name="Registros" component={Register} />
        <AppStack.Screen name="Calendario" component={Calender} />
        <AppStack.Screen name="Home" component={Detail} />
        <AppStack.Screen name="Notificacao" component={Config} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
