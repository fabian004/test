import React, { useState,useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export function Prueba(){
  type Nav = {
    navigate: (value: string) => void;
  }
  const navigation = useNavigation<Nav>()
    return (
      <View>
        <Text>prueba 1 CUADRUPLE DIA DE DIA y quinteto</Text>
        <Button
          title="Go prueba 2"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
        
    ); 
  }
