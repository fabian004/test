import { gql } from '@apollo/client';

export const createUsers = gql`
mutation nuevoUsuario($input: UsuarioInput,$token: String){
  nuevoUsuario(input: $input,token:$token){
        id
        googleId
        name
        email
        role
        img
        created_at
    }
}
`;


export const editUser = gql`
mutation editarUsuario($input: UsuarioInput){
  editarUsuario(input: $input){
        id
        googleId
        name
        email
        role
        img
        created_at
    }
}
`;



export const getUser = gql`
query obtenerUsuario($token: String!) {
  obtenerUsuario(token: $token)  {
    id
    googleId
    name
    email
    role
    img
    created_at
  }
}
`;

