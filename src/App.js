import React from "react";
import "./App.css";
import { useAuth } from "./providers/auth";
import Profile from "./components/profile";
import Login from "./components/login";

function App() {
  // Acessando o context em um componente filho
  const { user } = useAuth();

  return (
    <div className="container">
      <p>Entendendo a Context API</p>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
