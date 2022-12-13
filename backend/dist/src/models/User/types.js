export const types = `#graphql
  type User {
    id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    role: String
  }

  input UserInput {
    email: String!
    password: String!
    firstName: String
    lastName: String
    role: String
  }

  type TokenResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
    token: String
  }

  type UserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type MeResponse {
    id: ID
    email: String
    role: String
  }
`;
