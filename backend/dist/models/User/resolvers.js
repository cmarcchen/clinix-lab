import jwt from "jsonwebtoken";
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
        if (password !== user.password) {
            return {
                code: 401,
                success: false,
                message: "Invalid Credentials",
            };
        }
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_KEY); //
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
        const user = await dataSources.prisma.user.create({ data });
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_KEY); // Todo
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
