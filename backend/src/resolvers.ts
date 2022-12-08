import { DateTimeResolver } from "graphql-scalars";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    patients: async (_, __, { dataSources }) => {
      return await dataSources.prisma.patient.findMany();
    },
    trials: async (_, __, { dataSources }) => {
      return await dataSources.prisma.trial.findMany();
    },
    patientEvents: async (_, __, { dataSources }) => {
      return await dataSources.prisma.patientEvent.findMany();
    },
  },
  Mutation: {
    createPatient: async (_, __, { dataSources }) => {
      const { id } = await dataSources.prisma.patient.create({ data: {} });
      return {
        code: 200,
        success: true,
        message: "Created a new patient",
        id,
      };
    },
  },
};
