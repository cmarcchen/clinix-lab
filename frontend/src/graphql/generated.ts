import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { Dayjs } from "dayjs";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type MeResponse = {
  __typename?: "MeResponse";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  role?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  assignPatientToTrial: PatientTrialResponse;
  createPatient: PatientResponse;
  createPatientEvent: PatientEventResponse;
  createTrial: TrialResponse;
  deletePatient: PatientResponse;
  deletePatientEvent: PatientEventResponse;
  deleteTrial: TrialResponse;
  deleteUser: UserResponse;
  register: TokenResponse;
  unassignPatientToTrial: PatientTrialResponse;
  updatePatient: PatientResponse;
  updatePatientEvent: PatientEventResponse;
  updateTrial: TrialResponse;
  updateUser: UserResponse;
};

export type MutationAssignPatientToTrialArgs = {
  patientId: Scalars["ID"];
  trialId: Scalars["ID"];
};

export type MutationCreatePatientArgs = {
  data?: InputMaybe<PatientInput>;
};

export type MutationCreatePatientEventArgs = {
  data?: InputMaybe<PatientEventInput>;
  patientId: Scalars["ID"];
};

export type MutationCreateTrialArgs = {
  data?: InputMaybe<TrialInput>;
  patientsId?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDeletePatientArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePatientEventArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTrialArgs = {
  id: Scalars["ID"];
};

export type MutationRegisterArgs = {
  data?: InputMaybe<UserInput>;
};

export type MutationUnassignPatientToTrialArgs = {
  patientId: Scalars["ID"];
  trialId: Scalars["ID"];
};

export type MutationUpdatePatientArgs = {
  data?: InputMaybe<PatientInput>;
  id: Scalars["ID"];
};

export type MutationUpdatePatientEventArgs = {
  data?: InputMaybe<PatientEventInput>;
  id: Scalars["ID"];
};

export type MutationUpdateTrialArgs = {
  data?: InputMaybe<TrialInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserInput>;
};

export type Patient = {
  __typename?: "Patient";
  address?: Maybe<Scalars["String"]>;
  age?: Maybe<Scalars["Int"]>;
  createdAt: Scalars["DateTime"];
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  events?: Maybe<Array<Maybe<PatientEvent>>>;
  firstName?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  jobTitle?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  pictureUrl?: Maybe<Scalars["String"]>;
  trials?: Maybe<Array<Maybe<Trial>>>;
};

export type PatientEvent = {
  __typename?: "PatientEvent";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  patient?: Maybe<Patient>;
  patientId: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type PatientEventInput = {
  createdBy?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type PatientEventResponse = {
  __typename?: "PatientEventResponse";
  code: Scalars["Int"];
  message: Scalars["String"];
  patientEvent?: Maybe<PatientEvent>;
  success: Scalars["Boolean"];
};

export type PatientInput = {
  address?: InputMaybe<Scalars["String"]>;
  age?: InputMaybe<Scalars["Int"]>;
  dateOfBirth?: InputMaybe<Scalars["DateTime"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  pictureUrl?: InputMaybe<Scalars["String"]>;
};

export type PatientResponse = {
  __typename?: "PatientResponse";
  code: Scalars["Int"];
  message: Scalars["String"];
  patient?: Maybe<Patient>;
  success: Scalars["Boolean"];
};

export type PatientTrialResponse = {
  __typename?: "PatientTrialResponse";
  code: Scalars["Int"];
  message: Scalars["String"];
  patient?: Maybe<Patient>;
  success: Scalars["Boolean"];
  trial?: Maybe<Trial>;
};

export type Query = {
  __typename?: "Query";
  login: TokenResponse;
  me?: Maybe<MeResponse>;
  patient: Patient;
  patientEvent: PatientEvent;
  patientEvents: Array<Maybe<PatientEvent>>;
  patients: Array<Maybe<Patient>>;
  trial: Trial;
  trials: Array<Maybe<Trial>>;
};

export type QueryLoginArgs = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type QueryPatientArgs = {
  id: Scalars["ID"];
};

export type QueryPatientEventArgs = {
  id: Scalars["ID"];
};

export type QueryTrialArgs = {
  id: Scalars["ID"];
};

export type TokenResponse = {
  __typename?: "TokenResponse";
  code: Scalars["Int"];
  message: Scalars["String"];
  success: Scalars["Boolean"];
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type Trial = {
  __typename?: "Trial";
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  formulation?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  patients?: Maybe<Array<Maybe<Patient>>>;
  product?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type TrialInput = {
  description?: InputMaybe<Scalars["String"]>;
  formulation?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TrialResponse = {
  __typename?: "TrialResponse";
  code: Scalars["Int"];
  message: Scalars["String"];
  success: Scalars["Boolean"];
  trial?: Maybe<Trial>;
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  lastName?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};

export type UserInput = {
  email: Scalars["String"];
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  role?: InputMaybe<Scalars["String"]>;
};

export type UserResponse = {
  __typename?: "UserResponse";
  code: Scalars["Int"];
  message: Scalars["String"];
  success: Scalars["Boolean"];
  user?: Maybe<User>;
};

export type GetPatientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPatientsQuery = {
  __typename?: "Query";
  patients: Array<{
    __typename?: "Patient";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    age?: number | null;
    email?: string | null;
  } | null>;
};

export type GetPatientQueryVariables = Exact<{
  patientId: Scalars["ID"];
}>;

export type GetPatientQuery = {
  __typename?: "Query";
  patient: {
    __typename?: "Patient";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: any;
    email?: string | null;
    age?: number | null;
  };
};

export type CreatePatientMutationVariables = Exact<{
  data?: InputMaybe<PatientInput>;
}>;

export type CreatePatientMutation = {
  __typename?: "Mutation";
  createPatient: {
    __typename?: "PatientResponse";
    code: number;
    success: boolean;
    message: string;
    patient?: { __typename?: "Patient"; id: string } | null;
  };
};

export type GetTrialsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTrialsQuery = {
  __typename?: "Query";
  trials: Array<{
    __typename?: "Trial";
    id: string;
    title?: string | null;
    description?: string | null;
    product?: string | null;
    formulation?: string | null;
    createdAt: any;
    patients?: Array<{
      __typename?: "Patient";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: any;
      email?: string | null;
      age?: number | null;
    } | null> | null;
  } | null>;
};

export type GetTrialQueryVariables = Exact<{
  trialId: Scalars["ID"];
}>;

export type GetTrialQuery = {
  __typename?: "Query";
  trial: {
    __typename?: "Trial";
    id: string;
    title?: string | null;
    description?: string | null;
    product?: string | null;
    formulation?: string | null;
    createdAt: any;
    patients?: Array<{
      __typename?: "Patient";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: any;
      email?: string | null;
      age?: number | null;
    } | null> | null;
  };
};

export type CreateTrialMutationVariables = Exact<{
  data?: InputMaybe<TrialInput>;
  patientsId?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
}>;

export type CreateTrialMutation = {
  __typename?: "Mutation";
  createTrial: {
    __typename?: "TrialResponse";
    code: number;
    success: boolean;
    message: string;
    trial?: {
      __typename?: "Trial";
      id: string;
      title?: string | null;
      description?: string | null;
      product?: string | null;
      formulation?: string | null;
      createdAt: any;
      patients?: Array<{ __typename?: "Patient"; id: string } | null> | null;
    } | null;
  };
};

export type RegisterMutationVariables = Exact<{
  data?: InputMaybe<UserInput>;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "TokenResponse";
    code: number;
    success: boolean;
    message: string;
    token?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      email?: string | null;
      password?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      role?: string | null;
    } | null;
  };
};

export type LoginQueryVariables = Exact<{
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
}>;

export type LoginQuery = {
  __typename?: "Query";
  login: {
    __typename?: "TokenResponse";
    code: number;
    success: boolean;
    message: string;
    token?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  };
};

export const GetPatientsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPatients" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "patients" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPatientsQuery, GetPatientsQueryVariables>;
export const GetPatientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPatient" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "patientId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "patient" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "patientId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const CreatePatientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreatePatient" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PatientInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createPatient" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "patient" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePatientMutation,
  CreatePatientMutationVariables
>;
export const GetTrialsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTrials" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "trials" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "product" } },
                { kind: "Field", name: { kind: "Name", value: "formulation" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "patients" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "age" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTrialsQuery, GetTrialsQueryVariables>;
export const GetTrialDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTrial" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "trialId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "trial" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "trialId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "product" } },
                { kind: "Field", name: { kind: "Name", value: "formulation" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "patients" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "age" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTrialQuery, GetTrialQueryVariables>;
export const CreateTrialDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateTrial" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "TrialInput" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "patientsId" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createTrial" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "patientsId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "patientsId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "trial" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "product" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "formulation" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "patients" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTrialMutation, CreateTrialMutationVariables>;
export const RegisterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Register" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "UserInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "register" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "password" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Login" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "token" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
