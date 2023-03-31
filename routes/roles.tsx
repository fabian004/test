import { gql } from '@apollo/client';

export const createRoles = gql`
mutation nuevoRole($input: RoleInput,$services:[RoleServiceLogInput]){
  nuevoRole(input: $input,services:$services){
        id
        roleName
        percentage
        created_at
    }
}
`;

export const getRoles = gql`
query Query {
  obtenerRoles {
    id
    roleName
    percentage
  }
}
`;
