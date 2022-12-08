export const types = `#graphql
  type Patient {
    id: ID!
    firstName: String
    lastName: String
    createdAt: DateTime!
    sex: String
    email: String
    age: Int
    trials: [Trial]
    events: [PatientEvent]
  }

  input PatientInput {
    firstName: String
    lastName: String
    sex: String
    email: String
    age: Int
  }

  type PatientResponse {
    code: Int!
    success: Boolean!
    message: String!
    patient: Patient
  }
  
  type PatientTrialResponse {
    code: Int!
    success: Boolean!
    message: String!
    patient: Patient
    trial: Trial
  }
`;
