import { gql } from '@apollo/client';

export const createBills = gql`
mutation nuevoBill($input: BillInput){
    nuevoBill(input: $input){
      id
      name
      type
      amount
      created_at
    }
  }
`;

export const getBills = gql`
query Query {
    obtenerBills {
      id
      name
      type
      amount
      created_at
    }
  }
`;

export const getGeneralBalance = gql`
query Query {
  obtenerGeneralBalance {
    appointments
    commissions
    bills
    supplies
    salarys
    extras
  }
}
`;

