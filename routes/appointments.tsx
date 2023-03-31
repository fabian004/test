import { gql } from '@apollo/client';

export const createAppointments = gql`
mutation nuevoAppointment($input: AppointmentInput, $services:[ServiceLogInput]){
  nuevoAppointment(input: $input, services:$services){
    id
    name
    phone
    appointmentId
    status
    date
    hour
    serviceLogId{  
      id
      employeeId {
        id
        name
      }
      serviceId {
        id
        serviceName
        cost
        duration
      }
      commissionLogId{
        percentage
        commission
        balance
      }
      date
    }
    comments
    created_at
  }
}
`;

export const getAppointments = gql`
query Query {
  obtenerAppointments {
    id
    name
    phone
    appointmentId
    status
    date
    hour
    serviceLogId{  
      id
      employeeId {
        id
        name
      }
      serviceId {
        id
        serviceName
        cost
        duration
      }
      commissionLogId{
        percentage
        commission
        balance
      }
      date
    }
    comments
    created_at
  
  }
}

`;

export const getAppointmentsEmpleado = gql`
query obtenerAppointmentsEmployee($token: String!) {
  obtenerAppointmentsEmployee(token: $token) {
    id
    name
    phone
    appointmentId
    status
    date
    hour
    serviceLogId{  
      id
      employeeId {
        id
        name
      }
      serviceId {
        id
        serviceName
        cost
        duration
      }
      commissionLogId{
        percentage
        commission
        balance
      }
      date
    }
    comments
    created_at
  
  }
}

`;



export const paymentComplete = gql`
mutation paymentComplete($input: paymentInput){
  paymentComplete(input: $input){
    id
    name
    phone
    appointmentId
    status
    date
    hour
    serviceLogId{  
      id
      employeeId {
        id
        name
      }
      serviceId {
        id
        serviceName
        cost
        duration
      }
      commissionLogId{
        percentage
        commission
        balance
      }
      date
    }
    comments
    created_at
  }
}

`;