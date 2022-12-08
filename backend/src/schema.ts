// import { gql } from "@apollo/server";

import { graphql } from "graphql";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  scalar DateTime

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

  type Trial {
    id: ID!
    title: String
    description: String
    product: String
    formulation: String
    createdAt: DateTime!
    patients: [Patient]

  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    patients: [Patient]
    trials: [Trial]
    patientEvents: [PatientEvent]
  }


  type Mutation {
    createPatient: CreatePatientResponse!
    # patchPatient(patient: Patient!): PatchPatientResponse!
  }

  type CreatePatientResponse {
    code: Int!
    success: Boolean!
    message: String!
    id: String
  }
`;
