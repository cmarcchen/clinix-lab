import { DateTimeResolver } from "graphql-scalars";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        patients: async (_, __, { dataSources }) => {
            return await dataSources.prisma.patient.findMany();
        },
        patient: async (_, { id }, { dataSources }) => {
            return await dataSources.prisma.patient.findUnique({
                where: {
                    id,
                },
            });
        },
        trials: async (_, __, { dataSources }) => {
            return await dataSources.prisma.trial.findMany();
        },
        trial: async (_, { id }, { dataSources }) => {
            return await dataSources.prisma.trial.findUnique({
                where: {
                    id,
                },
            });
        },
        patientEvents: async (_, __, { dataSources }) => {
            return await dataSources.prisma.patientEvent.findMany();
        },
        patientEvent: async (_, { id }, { dataSources }) => {
            return await dataSources.prisma.patientEvent.findUnique({
                where: {
                    id,
                },
            });
        },
    },
    Mutation: {
        createPatient: async (_, { data }, { dataSources }) => {
            const patient = await dataSources.prisma.patient.create({ data });
            return {
                code: 200,
                success: true,
                message: "Created a new patient",
                patient,
            };
        },
        updatePatient: async (_, { id, data }, { dataSources }) => {
            const patient = await dataSources.prisma.patient.update({
                where: { id },
                data,
            });
            return {
                code: 200,
                success: true,
                message: "Patched patient",
                patient,
            };
        },
    },
};
