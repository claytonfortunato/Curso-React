import React from "react";
import { useAuth } from "./providers/auth";
import Profile from "./components/Profile";
import Login from "./components/Login";

import "./App.css";

function App() {
  const { user, setUser } = useAuth();
  console.log(user);

  return (
    <div className="App">
      <h1>Ola mundo</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
