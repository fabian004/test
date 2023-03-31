import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from "react";
import { useAuthentication } from '../helpers/useAuthentication';
import { View, Text } from 'react-native';
import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';
//import { LoginScreen } from './LoginScreen';
const Stack = createNativeStackNavigator();

export function LoginStackScreen() {

  const { user } = useAuthentication();

  if(user===undefined ){
    return <Prueba/>
  }

  if(user == null){
    return <Prueba2/>
 }else{
    return <Prueba/>
  }
}

function UserStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Prueba} />
        <Stack.Screen name="Login" component={Prueba2} />
      </Stack.Navigator>
  );
}


function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Prueba2} />
        <Stack.Screen name="Home" component={Prueba} />
      </Stack.Navigator>
  );
}

