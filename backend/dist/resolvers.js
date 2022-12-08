import { DateTimeResolver } from "graphql-scalars";
import { prisma } from "./db.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        patients: async (_, __, { dataSources }) => {
            return await prisma.patient.findMany({
                include: {
                    events: true,
                    trials: true,
                },
            });
        },
        patient: async (_, { id }, { dataSources }) => {
            return await prisma.patient.findUnique({
                include: {
                    events: true,
                    trials: true,
                },
                where: {
                    id,
                },
            });
        },
        trials: async (_, __, { dataSources }) => {
            return await prisma.trial.findMany({
                include: {
                    patients: true,
                },
            });
        },
        trial: async (_, { id }, { dataSources }) => {
            return await prisma.trial.findUnique({
                include: {
                    patients: true,
                },
                where: {
                    id,
                },
            });
        },
        patientEvents: async (_, __, { dataSources }) => {
            return await prisma.patientEvent.findMany({
                include: {
                    patient: true,
                },
            });
        },
        patientEvent: async (_, { id }, { dataSources }) => {
            return await prisma.patientEvent.findUnique({
                where: {
                    id,
                },
            });
        },
    },
    Mutation: {
        createPatient: async (_, { data }, { dataSources }) => {
            const patient = await prisma.patient.create({ data });
            return {
                code: 200,
                success: true,
                message: "Created a new patient",
                patient,
            };
        },
        updatePatient: async (_, { id, data }, { dataSources }) => {
            const patient = await prisma.patient.update({
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
        createTrial: async (_, { data }, { dataSources }) => {
            const trial = await prisma.trial.create({ data });
            return {
                code: 200,
                success: true,
                message: "Created a new trial",
                trial,
            };
        },
        updateTrial: async (_, { id, data }, { dataSources }) => {
            const trial = await prisma.trial.update({
                where: { id },
                data,
            });
            return {
                code: 200,
                success: true,
                message: "Patched trial",
                trial,
            };
        },
        assignPatientToTrial: async (_, { patientId, trialId }, { dataSources }) => {
            await prisma.trial.update({
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
            const patient = await prisma.patient.findUnique({
                where: {
                    id: patientId,
                },
            });
            const trial = await prisma.trial.findUnique({
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
    },
};
