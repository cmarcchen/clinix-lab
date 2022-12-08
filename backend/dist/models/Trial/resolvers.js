const queries = {
    trials: async (_, __, { dataSources }) => {
        return await dataSources.prisma.trial.findMany({
            include: {
                patients: true,
            },
        });
    },
    trial: async (_, { id }, { dataSources }) => {
        return await dataSources.prisma.trial.findUnique({
            include: {
                patients: true,
            },
            where: {
                id,
            },
        });
    },
};
const mutations = {
    createTrial: async (_, { data }, { dataSources }) => {
        const trial = await dataSources.prisma.trial.create({ data });
        return {
            code: 200,
            success: true,
            message: "Created a new trial",
            trial,
        };
    },
    updateTrial: async (_, { id, data }, { dataSources }) => {
        const trial = await dataSources.prisma.trial.update({
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
    deleteTrial: async (_, { id }, { dataSources }) => {
        const trial = await dataSources.prisma.trial.delete({
            where: { id },
        });
        return {
            code: 200,
            success: true,
            message: "Deleted trial",
            trial,
        };
    },
};
export const resolvers = { queries, mutations };
