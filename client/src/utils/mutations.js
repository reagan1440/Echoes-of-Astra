import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_DREAM = gql `
mutation saveDream($usersDream: String, $aiResponse: String) {
  saveDream(usersDream: $usersDream, aiResponse: $aiResponse) {
    _id
    firstName
    lastName
    email
    dreamHistory {
      usersDream
      aiResponse
    }
  }
}
`;


// export const DELETE_DREAM = gql`
//   mutation deleteDream($dreamId: ID!) {
//     deleteDream(dreamId: $dreamId) {
//       _id
//       firstName
//       lastName
//       email
//       dreamHistory {
//         usersDream
//         aiResponse
//       }
//     }
//   }
// `;