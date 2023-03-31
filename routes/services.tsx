import { gql } from '@apollo/client';

export const createServices = gql`
mutation nuevoService($input: ServiceInput){
    nuevoService(input: $input){
      id
      serviceName
      cost
      duration
      created_at
    }
  }
`;

export const getServices = gql`
query Query {
    obtenerServices {
      id
      serviceName
      cost
      duration
      created_at
    }
  }
`;
