import React, { useState,useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export function Prueba({ navigation }:any){
    return (
      <View>
        <Text>prueba 1</Text>
        <Button
          title="Go prueba 2"
          onPress={() => navigation.navigate('Prueba2')}
        />
      </View>
        
    ); 
  }
