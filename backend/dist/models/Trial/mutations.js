export const mutations = `#graphql
  createTrial(data: TrialInput): TrialResponse!
  updateTrial(id: ID!, data: TrialInput): TrialResponse!
  deleteTrial(id: ID!): TrialResponse!
`;
