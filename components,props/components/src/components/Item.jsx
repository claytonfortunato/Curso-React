import PropTypes from "prop-types";

const Item = ({ marca, ano_lancamento }) => {
  return (
    <>
      <li>
        {marca} {ano_lancamento}
      </li>
    </>
  );
};

Item.PropTypes = {
  marca: PropTypes.string,
  ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
  marca: "Faltou a marca",
  ano_lancamento: 0,
};

export default Item;
