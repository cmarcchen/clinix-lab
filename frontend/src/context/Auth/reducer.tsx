import { AuthStateInterface } from "./context";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

interface LogoutAction {
  type: "LOGOUT";
  payload?: {};
}

interface LoginAction {
  type: "LOGIN";
  payload: {
    token: string;
    user: {
      email: string;
      role: string;
    };
  };
}

interface RegisterAction {
  type: "REGISTER";
  payload: {
    token: string;
    user: {
      email: string;
      role: string;
    };
  };
}

export type AuthReducerAction = LogoutAction | LoginAction | RegisterAction;

export const initialState: AuthStateInterface = {
  token,
  user: {
    email: "",
    role: "",
  },
};

export const AuthReducer = (
  initialState: AuthStateInterface,
  action: AuthReducerAction
): AuthStateInterface => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        token: action.payload.token,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {
        ...initialState,
        token: "",
        user: {
          email: "",
          role: "",
        },
      };

    default:
      throw new Error(`Unhandled action type`);
  }
};