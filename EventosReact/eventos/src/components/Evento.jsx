const Evento = ({ numero }) => {
  const meuEvento = () => {
    console.log(`Opa, fui ativado! ${numero}`);
  };

  return (
    <div>
      <p>Clique para disparar em evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
};

export default Evento;
