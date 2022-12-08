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

const mutations = {
  createPatientEvent: async (_, { patientId, data }, { dataSources }) => {
    const patientEvent = await dataSources.prisma.patientEvent.create({
      data: {
        ...data,
        patient: {
          connect: { id: patientId },
        },
      },
    });
    return {
      code: 200,
      success: true,
      message: "Created patientEvent",
      patientEvent,
    };
  },
  updatePatientEvent: async (_, { id, data }, { dataSources }) => {
    const patientEvent = await dataSources.prisma.patientEvent.update({
      where: { id },
      data,
    });
    return {
      code: 200,
      success: true,
      message: "Patched patientEvent",
      patientEvent,
    };
  },
  deletePatientEvent: async (_, { id }, { dataSources }) => {
    const patientEvent = await dataSources.prisma.patientEvent.delete({
      where: { id },
    });
    return {
      code: 200,
      success: true,
      message: "Deleted patientEvent",
      patientEvent,
    };
  },
};

export const resolvers = { queries, mutations };
