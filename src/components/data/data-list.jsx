/** @format */

import { useState } from "react";
import "./data-list.css";

const DataList = ({ data, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (!data) {
    return null;
  }

  return (
    <div className="data-display">
      <h2>{data.name}</h2>
        
      <div className="data-user">
        <div className="info">
          <p>
            <strong>Estado Civil:</strong> {data.status}
          </p>
          <p>
            <strong>Idade:</strong> {data.age}
          </p>
          <p>
            <strong>Sexo:</strong> {data.gender}
          </p>
        </div>
        <div className="button-content">
          <button className="btn-destructive" onClick={() => onDelete(data.id)}>
            X
          </button>
          <button className="btn-default" onClick={toggleModal}>
            Ver mais
          </button>

          <div className="modal" style={{ display: modalOpen ? "block" : "none" }}>
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <h2>Detalhes do Usuário</h2>
              <p>
                <strong>Nome:</strong> {data.name}
              </p>
              <p>
                <strong>Estado Civil:</strong> {data.status}
              </p>
              <p>
                <strong>Idade:</strong> {data.age}
              </p>
              <p>
                <strong>Sexo:</strong> {data.gender}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataList;
