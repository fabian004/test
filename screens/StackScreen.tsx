import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, { useState }  from "react";
import { useAuthentication } from '../helpers/useAuthentication';
import { Button, Text } from 'react-native-paper';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';
import { LoginScreen } from './LoginScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }:any) => (
  <SafeAreaView>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
  </SafeAreaView>
);

const DetailsScreen = ({ navigation }:any) => (
  <SafeAreaView>
    <Text>Details Screen</Text>
    <Button onPress={() => navigation.goBack()}>Go back</Button>
  </SafeAreaView>
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Details',
      headerShown: false 
    },
  },
});

const LoginStackScreen = createAppContainer(AppNavigator);

export default LoginStackScreen
