import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;




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
