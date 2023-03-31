import { gql } from '@apollo/client';

export const createCommissions = gql`
mutation nuevoCommission($input: CommissionInput){
    nuevoCommission(input: $input){
      id
      roleId {
        id
        roleName
      }
      levelId {
        id
        levelName
      }
      serviceId {
        id
        serviceName
      }
      percentage
      created_at
    }
  }
`;

export const getCommissions = gql`
query Query {
  obtenerCommissions {
    id
    roleId {
       id
       roleName
    }
    levelId {
       id
       levelName
    }
    serviceId {
       id
       serviceName
    }
    percentage
    created_at
  }
}
`;
