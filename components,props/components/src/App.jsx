import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

const url = "https://via.placeholder.com/150";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
