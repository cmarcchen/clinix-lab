export const typeDefs = `#graphql






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




  type Query {
    
    
    patientEvents: [PatientEvent]!
    patientEvent(id: ID!): PatientEvent!
  }

  type Mutation {


    
  }






`;
