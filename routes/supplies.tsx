import { gql } from '@apollo/client';

export const createSupplies = gql`
mutation nuevoSupplie($input: SupplieInput){
    nuevoSupplie(input: $input){
      id
      name
      quantity
      retailPrice
      wholesalePrice
      created_at
    }
  }
`;

export const getSupplies = gql`
query Query {
    obtenerSupplies {
      id
      name
      quantity
      retailPrice
      wholesalePrice
      created_at
    }
  }
`;
