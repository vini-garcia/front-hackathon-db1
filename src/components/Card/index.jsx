import { Link } from "react-router-dom";
import { ConteinerLi } from "./styles";
import PropTypes from "prop-types";

export const Card = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ConteinerLi>
          <img src={product.img} alt={product.name} />
          <p>R$ {product.name}</p>
          {product.inStock == true ? <p>Produto em estoque</p> : <p>Fora de estoque</p>}
          <p>R$ {product.price}</p>
        </ConteinerLi>
      </Link>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};
