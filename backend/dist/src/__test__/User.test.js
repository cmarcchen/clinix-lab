import { DateTimeResolver } from "graphql-scalars";
import { User } from "../models/User";
import { ApolloServer } from "@apollo/server";
import assert from "assert";
import { PrismaClient } from "@prisma/client";
const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        ...User.resolvers.queries,
    },
    Mutation: {
        ...User.resolvers.mutations,
    },
};
export const typeDefs = `#graphql
  scalar DateTime

  ${User.types}

  type Query {
    ${User.queries}
  }
  type Mutation {
    ${User.mutations}
  }
`;
export default typeDefs;
describe("User", () => {
    beforeAll(() => { });
    it("True", () => {
        expect(true).toBe(true);
    });
    it("Should register a new user", async () => {
        const prisma = new PrismaClient({});
        const testServer = new ApolloServer({
            typeDefs,
            resolvers,
        });
        const response = await testServer.executeOperation({
            query: `query Login($email: String, $password: String) {
        login(email: $email, password: $password) {
          code
          success
          message
          token
        }
      }`,
            variables: { email: "marc.chen@mytest.com", password: "password" },
        }, {
            contextValue: {
                dataSources: {
                    prisma: new PrismaClient(),
                },
            },
        });
        assert(response.body.kind === "single");
        expect(response.body.singleResult.errors).toBeUndefined();
        expect(response.body.singleResult.data?.token).toBeDefined();
    });
});
