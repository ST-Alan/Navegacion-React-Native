import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico= ()=> {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        // drawerType:'slide',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
      }}
    
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Article" options={{title: 'Alan'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}