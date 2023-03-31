import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {ApolloProvider} from '@apollo/client'
import client from './config/apollo'
import './config/firebase';
import { Prueba } from './screens/profile/prueba';

export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <View>
        <Prueba/>
      </View>
    </NavigationContainer>
    </ApolloProvider>

  );
}

