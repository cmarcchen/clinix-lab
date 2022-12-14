import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import { getUser } from "./models/User/utils.js";
import { prisma } from "./connections/index.js";
dotenv.config();
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
        const token = req.headers.authorization || "";
        const user = await getUser(token);
        return {
            user,
            dataSources: {
                // Create a new instance of our data source for every request!
                // (We pass in the database connection because we don't need
                // a new connection for every request.)
                prisma,
            },
        };
    },
});
console.log(`🚀  Server ready at: ${url}`);
