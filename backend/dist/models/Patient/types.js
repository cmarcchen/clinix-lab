export const types = `#graphql
  type Patient {
    id: ID!
    firstName: String
    lastName: String
    createdAt: DateTime!
    gender: String
    email: String
    age: Int
    dateOfBirth: DateTime
    jobTitle: String
    address: String
    pictureUrl: String
    trials: [Trial]
    events: [PatientEvent]
  }

  input PatientInput {
    firstName: String
    lastName: String
    gender: String
    email: String
    age: Int
    dateOfBirth: DateTime
    jobTitle: String
    address: String
    pictureUrl: String
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
