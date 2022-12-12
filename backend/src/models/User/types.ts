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

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
    token: String
  }
`;
