import { useState } from "react";
import { Alert, Button, Checkbox, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { RegisterDocument } from "../../graphql/generated";

export function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [register, { loading, error, data }] = useMutation(RegisterDocument, {
    variables: {
      data: {
        email: credentials.email,
        password: credentials.password,
      },
    },
    onCompleted: (data) => {
      const { token } = data.register;
      localStorage.setItem("token", token!);
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-8 gap-4 items-center flex-col bg-white w-96 rounded-xl border-slate-100 border"
    >
      <h1 className="">Hi, Register</h1>
      <p className="text-slate-300">Enter an email and password to register</p>

      <TextField
        required
        name="email"
        label="Email"
        sx={{
          width: "100%",
        }}
        onChange={handleChange}
      />
      <TextField
        required
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
        Sign Up
      </Button>

      <Link to="/register">Dont have an account?</Link>
      {error ? <Alert severity="error">Something is wrong</Alert> : <></>}
    </form>
  );
}

export default Register;
