import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Login />
      <br />
      <User />
      <br />
      <Logout />
    </div>
  );
}

export default App;
