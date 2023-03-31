import React, { useState,useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export function Prueba2({ navigation }:any){
    return (
      <View>
        <Text>prueba 2 test</Text>
        <Button
          title="Go prueba 1"
          onPress={() => navigation.navigate('Prueba1')}
        />
      </View>
        
    ); 
  }
