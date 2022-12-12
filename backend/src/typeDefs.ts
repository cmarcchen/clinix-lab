import { Patient } from "./models/Patient/index.js";
import { Trial } from "./models/Trial/index.js";
import { PatientEvent } from "./models/PatientEvent/index.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  scalar DateTime

  ${Patient.types}
  ${Trial.types}
  ${PatientEvent.types}
  
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    ${Patient.queries}
    ${Trial.queries}
    ${PatientEvent.queries}
  }
  
  type Mutation {
    ${Patient.mutations}
    ${Trial.mutations}
    ${PatientEvent.mutations}
  }
`;

export default typeDefs;