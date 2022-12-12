import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 10;

const queries = {
  me: async (_, __, { dataSources, user }) => {
    if (!user) {
      return null;
    }

    const { id } = user;

    const { _id, email, role } = await dataSources.prisma.user.findUnique({
      where: { id },
    });
    return {
      id: _id,
      email,
      role,
    };
  },

  login: async (_, { email, password }, { dataSources }) => {
    const user = await dataSources.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        code: 401,
        success: false,
        message: "Invalid Credentials",
      };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return {
        code: 401,
        success: false,
        message: "Invalid Credentials",
      };
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_KEY
    ); //

    return {
      code: 200,
      success: true,
      message: "Sign In",
      user,
      token,
    };
  },
};

const mutations = {
  register: async (_, { data }, { dataSources }) => {
    const { password } = data;
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await dataSources.prisma.user.create({
      data: { ...data, password: hash },
    });
    console.log(user);
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
