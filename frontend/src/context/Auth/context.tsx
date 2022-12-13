import React from "react";
import { AuthReducer, initialState } from "./reducer";

export interface AuthStateInterface {
  token: string | null;
  user: {
    email: string;
    role: string;
  };
}

const AuthStateContext = React.createContext<AuthStateInterface | undefined>(
  undefined
);

const AuthDispatchContext = React.createContext<
  React.Dispatch<any> | undefined
>(undefined);

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }: any) => {
  const [user, dispatch] = React.useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
