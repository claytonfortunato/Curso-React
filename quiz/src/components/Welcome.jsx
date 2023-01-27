import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import quiz from "../img/quiz.svg";
import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={quiz} alt="Inicio do quiz" />
    </div>
  );
};

export default Welcome;
