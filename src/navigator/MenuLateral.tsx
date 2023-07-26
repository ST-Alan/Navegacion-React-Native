import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions,TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
// Lo comentado es para crear un componente aquí mismo
// import { createStackNavigator } from '@react-navigation/stack';



const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// const SettingsStackScreen = () =>{
//   return(
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   )
// }


export const MenuLateral= ()=> {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        // drawerType:'slide',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
      }}
      drawerContent={ (props) =><MenuInterno {...(props)} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Article" component={SettingsScreen} />
      {/* <Drawer.Screen name="Article" component={SettingsStackScreen} /> */}
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}:DrawerContentComponentProps)=>{
  return (
      <DrawerContentScrollView>

        {/* Parte del avatar */}
        <View style={styles.avatarContainer}>
          <Image 
          source={{
            uri:'https://st4.depositphotos.com/14903220/22197/v/600/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg'
          }}
          style={styles.avatar}
          />
        </View>

        {/* Opciones del menú */}
        <View style={styles.menuContainer}>

          <TouchableOpacity
            style={styles.menuBoton}
            onPress={()=>{
              navigation.navigate('StackNavigator')
            }}
          >
            <Text style={styles.menuTexto}>
              Navegación Stack
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={()=>{
              navigation.navigate('Article')
            }}
           >
            <Text style={styles.menuTexto}>
              Ajustes
            </Text>
          </TouchableOpacity>

        </View>

      </DrawerContentScrollView>

    )
}