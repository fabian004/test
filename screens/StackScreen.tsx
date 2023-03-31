import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from "react";
import { useAuthentication } from '../helpers/useAuthentication';

import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';

const Stack = createNativeStackNavigator();

export function LoginStackScreen() {

  const { user } = useAuthentication();

  if(user===undefined ){
    return <Prueba/>
  }

  return (
    <AuthStack/>
  )
  //return user ? <UserStack /> : <AuthStack />;
      
}

function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Prueba2" component={Prueba2} />
        <Stack.Screen name="Prueba" component={Prueba} />
      </Stack.Navigator>
  );
}
