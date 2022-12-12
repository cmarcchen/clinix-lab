import jwt from "jsonwebtoken";

const queries = {
  me: async (_, __, { dataSources, user }) => {
    if (!user) {
      return null;
    }

    const { id } = user;

    return await dataSources.prisma.user.findUnique({
      where: { id },
    });
  },
};

const mutations = {
  createUser: async (_, { data }, { dataSources }) => {
    const user = await dataSources.prisma.user.create({ data });
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_KEY
    ); // Todo
    return {
      code: 200,
      success: true,
      message: "Created a new user",
      user,
      token,
    };
  },
};

export const resolvers = { queries, mutations };
