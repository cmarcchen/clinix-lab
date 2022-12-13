import { resolvers } from "../resolvers";
import { typeDefs } from "../typeDefs";
import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import assert from "assert";

describe("User", () => {
  beforeAll(() => {});

  it("True", () => {
    expect(true).toBe(true);
  });

  it("Should register a new user", async () => {
    const prisma = new PrismaClient({});

    interface ContextValue {
      dataSources: {
        prisma: PrismaClient;
      };
    }

    const testServer = new ApolloServer<ContextValue>({
      typeDefs,
      resolvers,
    });

    const response = await testServer.executeOperation(
      {
        query: `query Login($email: String, $password: String) {
        login(email: $email, password: $password) {
          code
          success
          message
          token
        }
      }`,
        variables: { email: "marc.chen@mytest.com", password: "password" },
      },
      {
        contextValue: {
          dataSources: {
            prisma: new PrismaClient(),
          },
        },
      }
    );
    assert(response.body.kind === "single");
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.token).toBeDefined();
  });
});
