const typeDefs = `
  type Donation {
    _id: ID
    purchaseDate: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    donations: [Donation]
    dreamHistory: [Chat] 
  }

type Chat {
  usersDream: String
  aiResponse: String
  createdAt: String
}

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }


  type Query {
     user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveDream(usersDream: String, aiResponse: String):  User
  }
`;

module.exports = typeDefs;
