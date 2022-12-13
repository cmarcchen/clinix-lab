import React from "react";
import { AuthReducerAction } from "./reducer";

export async function login(
  dispatch: React.Dispatch<AuthReducerAction>,
  token: string,
  email: string,
  role: string
) {
  dispatch({
    type: "LOGIN",
    payload: {
      token,
      user: {
        email,
        role,
      },
    },
  });
  localStorage.setItem("token", token);
}

export async function logout(dispatch: React.Dispatch<AuthReducerAction>) {
  dispatch({ type: "LOGOUT" });

  // localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
