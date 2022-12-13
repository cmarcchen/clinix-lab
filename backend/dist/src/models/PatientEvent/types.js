export const types = `#graphql
  type PatientEvent {
    id: ID!
    title: String
    description: String
    type: String
    createdBy: String
    createdAt: DateTime!
    patient: Patient
    patientId: String!
  }

  input PatientEventInput {
    title: String
    description: String
    type: String
    createdBy: String
  }

  type PatientEventResponse {
    code: Int!
    success: Boolean!
    message: String!
    patientEvent: PatientEvent
  }
`;
