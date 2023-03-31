import React from "react";
import { useAuthentication } from '../helpers/useAuthentication';

import { Prueba } from './profile/prueba';
import { Prueba2 } from './profile/prueba2';

export function LoginStackScreen() {

  const { user } = useAuthentication();
  
  return (
    <Prueba2/>
  );
  
      
}
