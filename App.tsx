import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {ApolloProvider} from '@apollo/client'
import client from './config/apollo'
import './config/firebase';
import { LoginStackScreen } from './screens/StackScreen';

export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <LoginStackScreen/>
    </NavigationContainer>
    </ApolloProvider>
  );
}

