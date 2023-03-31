import { gql } from '@apollo/client';

export const createLevels = gql`
mutation nuevoLevel($input: LevelInput){
  nuevoLevel(input: $input){
        id
        levelName
        created_at
    }
}
`;

export const getLevels = gql`
query Query {
  obtenerLevels {
    id
    levelName
  }
}
`;
