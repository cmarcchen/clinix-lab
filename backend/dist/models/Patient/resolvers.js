import { GraphQLError } from "graphql";
const queries = {
    patients: async (_, __, { dataSources, user, url }) => {
        console.log(url);
        if (!user)
            // throwing a `GraphQLError` here allows us to specify an HTTP status code,
            // standard `Error`s will have a 500 status code by default
            throw new GraphQLError("User is not authenticated", {
                extensions: {
                    code: "UNAUTHENTICATED",
                    http: { status: 401 },
                },
            });
        return await dataSources.prisma.patient.findMany({
            include: {
                events: true,
                trials: true,
            },
        });
    },
    patient: async (_, { id }, { dataSources }) => {
        return await dataSources.prisma.patient.findUnique({
            include: {
                events: true,
                trials: true,
            },
            where: {
                id,
            },
        });
    },
};
const mutations = {
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
    deletePatient: async (_, { id }, { dataSources }) => {
        const patient = await dataSources.prisma.patient.delete({
            where: { id },
        });
        return {
            code: 200,
            success: true,
            message: "Deleted patient",
            patient,
        };
    },
    assignPatientToTrial: async (_, { patientId, trialId }, { dataSources }) => {
        await dataSources.prisma.trial.update({
            where: {
                id: trialId,
            },
            data: {
                patients: {
                    connect: {
                        id: patientId,
                    },
                },
            },
        });
        const patient = await dataSources.prisma.patient.findUnique({
            where: {
                id: patientId,
            },
        });
        const trial = await dataSources.prisma.trial.findUnique({
            where: {
                id: trialId,
            },
        });
        return {
            code: 200,
            success: true,
            message: "Assign patient to trial",
            patient,
            trial,
        };
    },
    unassignPatientToTrial: async (_, { patientId, trialId }, { dataSources }) => {
        await dataSources.prisma.trial.update({
            where: {
                id: trialId,
            },
            data: {
                patients: {
                    disconnect: {
                        id: patientId,
                    },
                },
            },
        });
        const patient = await dataSources.prisma.patient.findUnique({
            where: {
                id: patientId,
            },
        });
        const trial = await dataSources.prisma.trial.findUnique({
            where: {
                id: trialId,
            },
        });
        return {
            code: 200,
            success: true,
            message: "Assign patient to trial",
            patient,
            trial,
        };
    },
};
export const resolvers = { queries, mutations };
