import React, { useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {
  const { user, setUser } = useAuth();
  const [input, setInput] = useState({
    name: "",
  });

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(input));
    setUser(input);
    console.log(user);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({
      name: "",
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setInput({ name: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Login;
