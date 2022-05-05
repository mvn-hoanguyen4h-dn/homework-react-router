import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  let { login } = useAuth();

  return (
    <>
      <h1>Login Page</h1>
      <form className="form">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </form>
      <button className="btn" onClick={() => login({ email }, { password })}>
        Login
      </button>
      <Link to="/auth/register">Register</Link>
    </>
  );
}

export default Login;
