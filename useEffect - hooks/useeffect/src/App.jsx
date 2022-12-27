import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10);
  const [user, setUser] = useState(0);

  // 1 - useEffect utilização
  useEffect(() => {
    console.log("Roda a cada renderização");
  });

  // 2 - Array de dependências
  useEffect(() => {
    console.log("Só roda ao incrementar valor!");
  }, [count]);

  // 3 -array de dep vazio
  useEffect(() => {
    console.log("Só executa uma vez!");
  }, []);

  // 4 - clean up function
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`O incrementador foi alterado ${count} vezes.`);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  // 5 - fetch com useEffect
  useEffect(() => {
    fetch("https://api.github.com/users/matheusbattisti");
    .then(r => r.json());
    .then((json) => setUser(json));
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Renderizar
        </button>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => setCountB((prevCount) => prevCount + 1)}>
          Renderizar
        </button>
        <p>{countB}</p>
      </div>
      {user && (
        <div>
          <p>Dados do usuário:</p>
          <h1>Nome:</h1>
          <p>
            Site: <a href={user.blog}>{user.blog}</a>
          </p>
          <img src={user.avatar_url} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
