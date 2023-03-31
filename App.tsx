import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {ApolloProvider} from '@apollo/client'
import client from './config/apollo'
import './config/firebase';
import LoginStackScreen from './screens/StackScreen';

export default function App() {


  return (
    <ApolloProvider client={client}>
    <SafeAreaView style={styles.backgroundStyle}>
      <LoginStackScreen/>
    </SafeAreaView>
    </ApolloProvider>
  );
}


const styles = StyleSheet.create({
  backgroundStyle: {
    flex:1,
    backgroundColor: '#fff',
  },
});

