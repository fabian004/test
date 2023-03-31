import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from "react";
import { useAuthentication } from '../helpers/useAuthentication';
import { View, Text } from 'react-native';
import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';
import { LoginScreen } from './LoginScreen';
const Stack = createNativeStackNavigator();

export function LoginStackScreen() {

  const { user } = useAuthentication();

  if(user===undefined ){
    return <Prueba/>
  }
  console.log(user)

  if(user == null){
    return <Prueba/>
 }else{
    return <Prueba2/>
  }
}

function UserStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Prueba} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}


function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Prueba} />
      </Stack.Navigator>
  );
}

