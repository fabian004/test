import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {ApolloProvider} from '@apollo/client'
import client from './config/apollo'
import './config/firebase';
import { LoginStackScreen } from './screens/StackScreen';
import { Prueba } from './screens/profile/prueba';
import { Prueba2 } from './screens/profile/prueba2';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
export default function App() {
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

