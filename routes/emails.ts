import { gql } from '@apollo/client';

export const createEmail = gql`
mutation nuevoEmail($input: EmailInput){
    nuevoEmail(input: $input){
      name
      to
      comments
  }
}
`;