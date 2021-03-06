import React from "react";
import PropTypes from "prop-types";

const Carro = ({
  carros = [],
  onChange,
  onSubmit,
  onEdit,
  onUpdate,
  onDelete,
}) => {
  return (
    <>
      <span>Modelo</span>
      <input name="modelo" onChange={onChange} />
      <span>Marca</span>
      <input name="marca" onChange={onChange} />
      <button onClick={onSubmit}>Criar</button>

      <br />
      <br />
      {carros &&
        carros.map((carro, key) => {
          return (
            <div key={key} style={{ cursor: "pointer" }}>
              <span>Modelo: </span>
              <input
                name="modelo"
                value={carro.modelo}
                onChange={(event) => onEdit(event, key)}
              />
              <br />
              <span>Marca: </span>
              <input
                name="marca"
                value={carro.marca}
                onChange={(event) => onEdit(event, key)}
              />
              <br />
              <button onClick={() => onUpdate(carro)}>Alterar</button>
              <button onClick={() => onDelete(carro.id, key)}>Deletar</button>
              <br />
            </div>
          );
        })}
    </>
  );
};

Carro.propTypes = {
  carros: PropTypes.arrayOf({
    modelo: PropTypes.string,
    marca: PropTypes.string,
    id: PropTypes.number,
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onEdit: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Carro;
