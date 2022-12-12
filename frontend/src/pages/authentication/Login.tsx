import { Button, Checkbox, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

export function Login() {
  const { loading, error, data } = useQuery();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("hello");
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
        label="Email"
        sx={{
          width: "100%",
        }}
      />
      <TextField
        required
        label="Password"
        sx={{
          width: "100%",
        }}
        type="password"
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
    </form>
  );
}

export default Login;
