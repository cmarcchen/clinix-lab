export const mutations = `#graphql
  createPatient(data: PatientInput): PatientResponse!
  updatePatient(id: ID!, data: PatientInput): PatientResponse!
  deletePatient(id: ID!): PatientResponse!
  assignPatientToTrial(patientId: ID!, trialId: ID!): PatientTrialResponse!
  unassignPatientToTrial(patientId: ID!, trialId: ID!): PatientTrialResponse!
`;
