export const queries = `#graphql
  me: MeResponse
  login(email: String, password: String): TokenResponse!
`;
