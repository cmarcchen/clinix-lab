import React from "react";
import { AuthReducerAction } from "./reducer";

interface LoginPayload {
  token: string;
  user: {
    email: string;
    role: string;
  };
}

export async function login(
  dispatch: React.Dispatch<AuthReducerAction>,
  payload: LoginPayload
) {
  dispatch({
    type: "LOGIN",
    payload,
  });
  localStorage.setItem("token", payload.token);
}

export async function logout(dispatch: React.Dispatch<AuthReducerAction>) {
  dispatch({ type: "LOGOUT" });

  // localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
