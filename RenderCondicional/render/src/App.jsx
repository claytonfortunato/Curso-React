import "./App.css";
import Lista from "./components/Lista";

function App() {
  const meusItens = ["React", "Vue", "Angular"];

  return (
    <div className="App">
      <h1>Renderização Condicional/Listas</h1>
      <Lista itens={meusItens} />
      <Lista itens={[]} />
    </div>
  );
}

export default App;
