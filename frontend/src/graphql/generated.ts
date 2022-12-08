import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreatePatientResponse = {
  __typename?: 'CreatePatientResponse';
  code: Scalars['Int'];
  message: Scalars['String'];
  patient?: Maybe<Patient>;
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPatient: CreatePatientResponse;
  updatePatient: UpdatePatientResponse;
};


export type MutationCreatePatientArgs = {
  data?: InputMaybe<PatientInput>;
};


export type MutationUpdatePatientArgs = {
  data?: InputMaybe<PatientInput>;
  id: Scalars['ID'];
};

export type Patient = {
  __typename?: 'Patient';
  age?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<PatientEvent>>>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  trials?: Maybe<Array<Maybe<Trial>>>;
};

export type PatientEvent = {
  __typename?: 'PatientEvent';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  patient?: Maybe<Patient>;
  patientId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PatientInput = {
  age?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  patient: Patient;
  patientEvent: PatientEvent;
  patientEvents: Array<Maybe<PatientEvent>>;
  patients: Array<Maybe<Patient>>;
  trial: Trial;
  trials: Array<Maybe<Trial>>;
};


export type QueryPatientArgs = {
  id: Scalars['ID'];
};


export type QueryPatientEventArgs = {
  id: Scalars['ID'];
};


export type QueryTrialArgs = {
  id: Scalars['ID'];
};

export type Trial = {
  __typename?: 'Trial';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  formulation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  patients?: Maybe<Array<Maybe<Patient>>>;
  product?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePatientResponse = {
  __typename?: 'UpdatePatientResponse';
  code: Scalars['Int'];
  message: Scalars['String'];
  patient?: Maybe<Patient>;
  success: Scalars['Boolean'];
};

export type GetPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPatientsQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: string, firstName?: string | null, lastName?: string | null, age?: number | null, email?: string | null } | null> };

export type GetPatientQueryVariables = Exact<{
  patientId: Scalars['ID'];
}>;


export type GetPatientQuery = { __typename?: 'Query', patient: { __typename?: 'Patient', id: string, firstName?: string | null, lastName?: string | null, createdAt: any, sex?: string | null, email?: string | null, age?: number | null } };

export type CreatePatientMutationVariables = Exact<{
  data?: InputMaybe<PatientInput>;
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient: { __typename?: 'CreatePatientResponse', code: number, message: string, success: boolean, patient?: { __typename?: 'Patient', id: string, createdAt: any, firstName?: string | null, lastName?: string | null, age?: number | null, email?: string | null, sex?: string | null } | null } };


export const GetPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetPatientsQuery, GetPatientsQueryVariables>;
export const GetPatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"patientId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}}]}}]} as unknown as DocumentNode<GetPatientQuery, GetPatientQueryVariables>;
export const CreatePatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PatientInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePatientMutation, CreatePatientMutationVariables>;