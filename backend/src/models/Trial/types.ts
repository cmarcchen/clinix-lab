export const types = `#graphql
  type Trial {
    id: ID!
    title: String
    description: String
    product: String
    formulation: String
    createdAt: DateTime!
    patients: [Patient]
  }

  input TrialInput {
    title: String
    description: String
    product: String
    formulation: String
  }

  type TrialResponse {
    code: Int!
    success: Boolean!
    message: String!
    trial: Trial
  }
`;
