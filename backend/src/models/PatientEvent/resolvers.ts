const queries = {
  patientEvents: async (_, __, { dataSources }) => {
    return await dataSources.prisma.patientEvent.findMany({
      include: {
        patient: true,
      },
    });
  },
  patientEvent: async (_, { id }, { dataSources }) => {
    return await dataSources.prisma.patientEvent.findUnique({
      where: {
        id,
      },
    });
  },
};

const mutations = {};

export const resolvers = { queries, mutations };
