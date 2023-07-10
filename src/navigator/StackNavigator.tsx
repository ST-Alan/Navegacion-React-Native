import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Sreen } from '../screens/Pagina1Sreen';
import { Pagina2Sreen } from '../screens/Pagina2Sreen';
import { Pagina3Sreen } from '../screens/Pagina3Sreen';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pagina1Sreen" component={Pagina1Sreen} />
      <Stack.Screen name="Pagina2Sreen" component={Pagina2Sreen} />
      <Stack.Screen name="Pagina3Sreen" component={Pagina3Sreen} />
    </Stack.Navigator>
  );
}