import { Patient } from "./models/Patient/index.js";
import { DateTimeResolver } from "graphql-scalars";
import { Trial } from "./models/Trial/index.js";
import { PatientEvent } from "./models/PatientEvent/index.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  DateTime: DateTimeResolver,

  Query: {
    ...Patient.resolvers.queries,
    ...Trial.resolvers.queries,
    ...PatientEvent.resolvers.queries,
  },
  Mutation: {
    ...Patient.resolvers.mutations,
    ...Trial.resolvers.mutations,
    ...PatientEvent.resolvers.mutations,
  },
};

export default resolvers;
