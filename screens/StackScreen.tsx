import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, { useState }  from "react";
import { useAuthentication } from '../helpers/useAuthentication';
import { Button, Text } from 'react-native-paper';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';
import { LoginScreen } from './LoginScreen';
import {NavigationContainer} from '@react-navigation/native'
const Stack = createNativeStackNavigator();


export function LoginStackScreen() {

  return <UserStack/>
  
}

function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Prueba} />
        <Stack.Screen name="Login" component={Prueba2} />
    </Stack.Navigator>
  </NavigationContainer>
  );

}
