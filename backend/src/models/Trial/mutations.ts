export const mutations = `#graphql
  createTrial(data: TrialInput, patientsId: [String]): TrialResponse!
  updateTrial(id: ID!, data: TrialInput): TrialResponse!
  deleteTrial(id: ID!): TrialResponse!
`;
