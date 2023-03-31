import React, { useState,useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export function Prueba2(){
    type Nav = {
      navigate: (value: string) => void;
    }
    const navigation = useNavigation<Nav>()
    return (
      <View>
        <Text>prueba 2 test CUADRUPLE DIA DE DIA y quinteto</Text>
        <Button
          title="Go prueba 1"
          onPress={() => navigation.navigate('Prueba1')}
        />
      </View>
        
    ); 
  }
