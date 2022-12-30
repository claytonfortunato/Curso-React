import Item from "./Item";

const List = () => {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1987} />
        <Item marca="Fiat" ano_lancamento={1963} />
        <Item marca="Renault" />
      </ul>
    </>
  );
};

export default List;
