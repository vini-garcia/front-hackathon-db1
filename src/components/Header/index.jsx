import { ConteinerHeader } from "./styles";
import PropTypes from "prop-types";

export const Header = ({ getProductByButton }) => {
  return (
    <>
      <ConteinerHeader>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-vini">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NetXoes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="">
                    Home
                  </a>
                </li>
                <li onClick={() => getProductByButton("todos")} className="nav-item">
                  <a className="nav-link" href="#">
                    Todos os produtos
                  </a>
                </li>
                <li onClick={() => getProductByButton("calçado")} className="nav-item">
                  <a className="nav-link" href="#">
                    Calçados
                  </a>
                </li>
                <li onClick={() => getProductByButton("camiseta")} className="nav-item">
                  <a className="nav-link" href="#">
                    Camisetas
                  </a>
                </li>
                <li onClick={() => getProductByButton("artigos esportivos")} className="nav-item">
                  <a className="nav-link" href="#">
                    Artigos Esportivos
                  </a>
                </li>
                <li onClick={() => getProductByButton("out")} className="nav-item">
                  <a className="nav-link" href="#">
                    Fora de estoque
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </ConteinerHeader>
    </>
  );
};

Header.propTypes = {
  getProductByButton: PropTypes.func,
};
