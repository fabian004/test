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
    <ApolloProvider client={client}>
    <NavigationContainer>
      <LoginStackScreen/>
    </NavigationContainer>
    </ApolloProvider>
  );
}

