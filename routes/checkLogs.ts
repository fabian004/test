import { gql } from '@apollo/client';

export const getCheckLog = gql`
query Query {
    obtenerCheckLogs {
    id
    employeeId{
      name
    }
    init_online
    finish_online
  }
}
`;

export const getCheckLogsByEmployee = gql`
query obtenerCheckLogsByEmployee($token: String!) {
    obtenerCheckLogsByEmployee(token: $token)  {
        id
        employeeId{
          name
        }
        init_online
        finish_online
    }
  }
`;

export const getCheckLogsByEmployeer = gql`
query obtenerCheckLogsByEmployeer($token: String!) {
    obtenerCheckLogsByEmployeer(token: $token)  {
        id
        employeeId{
          name
        }
        init_online
        finish_online
    }
  }
`;

export const createCheckLog = gql`
mutation nuevoCheckLog($input: CheckLogInput){
    nuevoCheckLog(input: $input){
      id
      employeeId{
        name
      }
      init_online
      finish_online
  }
}
`;

export const closeCheckLog = gql`
mutation finishCheckLog($input: CheckLogInput){
    finishCheckLog(input: $input){
      id
      employeeId{
        name
      }
      init_online
      finish_online
  }
}
`;