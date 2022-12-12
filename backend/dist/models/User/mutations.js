export const mutations = `#graphql
  register(
    data: UserInput
  ): TokenResponse!
  updateUser(
    data: UserInput
  ): UserResponse!
  deleteUser: UserResponse!
`;
