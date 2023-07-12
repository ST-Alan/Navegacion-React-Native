import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import {styles} from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}


export const Pagina1Screen = ({navigation}:Props) => {
    // console.log('Cls',props)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>

        <Button
            title="Ir a página 2"
            onPress={()=>navigation.navigate('Pagina2Screen')}
        />
        <Text>Navegar con Argumentos</Text>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{...styles.botonGrande,
            backgroundColor:'#248552'}}
            onPress={()=> navigation.navigate('PersonaScreen',{
              id:1,
              nombre: 'Pedro'
            })}
            >
              <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonGrande}
            onPress={()=> navigation.navigate('PersonaScreen',{
            id:2,
            nombre: 'María'
            })}
            >
              <Text style={styles.botonGrandeTexto}>María</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
