import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);

  const buttonRef = useRef();

  const oldCountRef = useRef();

  // Não se renderiza o componente
  useEffect(() => {
    // setNumber((prevNumber) => prevNumber + 10);
    numberRef.current = Math.random();
  });

  // Referência para elementos do DOM
  useEffect(() => {
    console.log(buttonRef.current.click());
  }, []);

  // Referência do valor anterior
  useEffect(() => {
    oldCountRef.current = count;
  }, [count]);

  return (
    <div className="App">
      <h1>O number é: {number} </h1>
      <h1>O contador é: {count}</h1>
      <h2>O contador anterior era: {oldCountRef.current} </h2>
      <button
        ref={buttonRef}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Adicionar
      </button>
      <h1>O número do useRef é: {numberRef.current} </h1>
    </div>
  );
}

export default App;
