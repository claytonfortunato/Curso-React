import React, { useState } from "react";
import { changeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name));
  };

  return (
    <div>
      <form>
        <h1>Login</h1>

        <div>
          <input
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
