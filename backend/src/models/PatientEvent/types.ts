export const types = `#graphql
  type PatientEvent {
    id: ID!
    title: String
    description: String
    type: String
    createdBy: String
    createdAt: DateTime!
    patient: Patient
    patientId: String
  }
`;
