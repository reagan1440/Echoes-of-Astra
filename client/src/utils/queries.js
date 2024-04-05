import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user {
  user {
    _id
    firstName
    lastName
    email
    dreamHistory {
      usersDream
      aiResponse
      createdAt
    }
  }
}
`;
