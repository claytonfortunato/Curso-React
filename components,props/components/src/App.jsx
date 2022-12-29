import "./App.css";
import HelloWorld from "./components/HelloWorld";

const url = "https://via.placeholder.com/150";

function App() {
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
