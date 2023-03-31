import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, { useState }  from "react";
import { useAuthentication } from '../helpers/useAuthentication';
import { Button, Text } from 'react-native-paper';
import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';
import { LoginScreen } from './LoginScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }:any) => (
  <>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
  </>
);

const DetailsScreen = ({ navigation }:any) => (
  <>
    <Text>Details Screen</Text>
    <Button onPress={() => navigation.goBack()}>Go back</Button>
  </>
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
