import { useQuery } from '@apollo/client';
import { getUser } from '../routes/users';
import { getEmployeeByGoogleId } from '../routes/employees';
import {getAuth, } from 'firebase/auth'


export function Session(){
    const auth = getAuth();
    const { loading, error, data } = useQuery(getUser,{variables:{
        token:auth.currentUser?.uid
      }})
        if (loading) {
          return 'Loading...'
        }
        if (error ) {
          return 'Error!'
        }
  
        return data
      
}


export function Session_Employee(){
    const auth = getAuth();
  const { loading, error, data } = useQuery(getEmployeeByGoogleId,{variables:{
      token:auth.currentUser?.uid
    }})
      if (loading) {
        return 'Loading...'
      }
      if (error ) {
        return 'Error!'
      }

      return data
    
}