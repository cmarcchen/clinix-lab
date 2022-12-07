import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { prisma } from "./db.js";
import { DateTimeResolver } from "graphql-scalars";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  scalar DateTime

  type Patient {
    id: ID!
    firstName: String!
    lastName: String!
    createdAt: DateTime!
    sex: String!
    email: String!
    age: Int
    trials: [Trial]
    events: [PatientEvent]
  }

  type PatientEvent {
    id: ID!
    title: String!
    description: String!
    type: String
    createdBy: String
    createdAt: DateTime
    patient: Patient
    patientId: String
  }

  type Trial {
    id: ID!
    title: String!
    description: String!
    product: String
    formulation: String
    createdAt: DateTime
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
`;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        patients: async () => {
            return await prisma.patient.findMany();
        },
        trials: async () => {
            return await prisma.trial.findMany();
        },
        patientEvents: async () => {
            return await prisma.patientEvent.findMany();
        },
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
