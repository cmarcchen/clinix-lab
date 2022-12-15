import { Alert, Button, Checkbox, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { LoginDocument } from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../context/Auth/actions";
import { useAuthDispatch } from "../../context/Auth";

export function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const dispatch = useAuthDispatch();

  const [loginQuery, { loading, error, data }] = useLazyQuery(LoginDocument, {
    onCompleted: (data) => {
      const { token, user } = data.login;

      if (!token) {
        return setIsInvalidCredential(true);
      }
      setIsInvalidCredential(false);
      login(dispatch, {
        token,
        user: {
          email: user?.email!,
          role: user?.role!,
        },
      });
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginQuery({
      variables: {
        email: credentials.email,
        password: credentials.password,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-8 gap-4 items-center flex-col bg-white w-96 rounded-xl border-slate-100 border"
    >
      <h1 className="">Hi, Welcome Back</h1>
      <p className="text-slate-300">Enter your credentials to continue</p>

      <TextField
        required
        id="email"
        name="email"
        label="Email"
        sx={{
          width: "100%",
        }}
        onChange={handleChange}
      />
      <TextField
        required
        id="password"
        name="password"
        label="Password"
        sx={{
          width: "100%",
        }}
        type="password"
        onChange={handleChange}
      />
      <div className="flex items-center justify-between">
        <Checkbox title="Test" />
        <Link to="/test">Forgot Password?</Link>
      </div>
      <Button
        type="submit"
        sx={{
          width: "100%",
        }}
        variant="contained"
      >
        Sign In
      </Button>

      <Link to="/test">Dont have an account?</Link>
      {error || isInvalidCredential ? (
        <Alert severity="error">Something is wrong</Alert>
      ) : (
        <></>
      )}
    </form>
  );
}

export default Login;
