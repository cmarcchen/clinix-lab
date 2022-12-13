export const mutations = `#graphql
  createPatientEvent(patientId: ID!, data: PatientEventInput): PatientEventResponse!
  updatePatientEvent(id: ID!, data: PatientEventInput): PatientEventResponse!
  deletePatientEvent(id: ID!): PatientEventResponse!
`;
