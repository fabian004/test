import { gql } from '@apollo/client';

export const createEmployees = gql`
mutation nuevoEmployee($input: EmployeeInput){
  nuevoEmployee(input: $input){
    id
    userId
    clientId
    name
    email
    roleId {
      id
      roleName
    }
    level {
      id
      levelName
    }
    salary
    online
    created_at
  }
}
`;

export const getEmployees = gql`
query Query {
  obtenerEmployees {
    id
    userId
    clientId
    name
    email
    roleId {
      id
      roleName
    }
    level {
      id
      levelName
    }
    salary
    online
    created_at
  }
}
`;
export const getEmployee = gql`
query obtenerEmployee($token: String!) {
  obtenerEmployee(token: $token)  {
    
    id
    userId
    clientId
    name
    email
    roleId {
      id
      roleName
    }
    level {
      id
      levelName
    }
    salary
    online
    created_at
  }
}
`;

export const getEmployeeByGoogleId = gql`
query obtenerEmployeeByGoogleId($token: String!) {
  obtenerEmployeeByGoogleId(token: $token)  {
    
    id
    userId
    clientId
    name
    email
    roleId {
      id
      roleName
    }
    level {
      id
      levelName
    }
    salary
    online
    created_at
  }
}
`;

export const getEmployeesByService = gql`
query obtenerEmployeesByService($token: String!,$hour: String!,$services:[ServiceLogInput]){
  obtenerEmployeesByService(token: $token,hour: $hour, services:$services) {
    id
    userId
    clientId
    name
    email
    roleId {
      id
      roleName
    }
    level {
      id
      levelName
    }
    salary
    online
    created_at
  }
}
`;