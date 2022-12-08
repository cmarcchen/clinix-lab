export const mutations = `#graphql
  createPatient(data: PatientInput): PatientResponse!
  updatePatient(id: ID!, data: PatientInput): PatientResponse!
  assignPatientToTrial(patientId: ID!, trialId: ID!): PatientTrialResponse!
`;
