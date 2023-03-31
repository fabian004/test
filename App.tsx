import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {ApolloProvider} from '@apollo/client'
import client from './config/apollo'
import './config/firebase';

export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <View>
        <Text>primer test</Text>
      </View>
    </NavigationContainer>
    </ApolloProvider>

  );
}

