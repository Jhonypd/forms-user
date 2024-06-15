/** @format */

import { useState } from "react";
import "./data-list.css";

const DataList = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  if (!data) return null;

  const labelMap = {
    codigo: "Código",
    atualizacao: "Atualização",
    pressao: "Pressão",
    temperatura: "Temperatura",
    tempo: "Tempo",
    tempo_desc: "Descrição do Tempo",
    umidade: "Umidade",
    vento_dir: "Direção do Vento",
    vento_int: "Intensidade do Vento",
    visibilidade: "Visibilidade",
  };

  const renderDataFields = (data) => {
    return Object.keys(data).map((key) => {
      if (!labelMap[key]) return null;
      return (
        <p key={key}>
          <strong>{labelMap[key]}:</strong> {data[key]}
        </p>
      );
    });
  };

  return (
    <>
      {data && (
        <div className="data-display">
          <div className="data-user">
            <div className="info">{renderDataFields(data)}</div>
            <div className="button-content">
              {/* <button className="btn-default" onClick={toggleModal} type="button">
            Ver mais
          </button> */}

              <div className="modal" style={{ display: modalOpen ? "block" : "none" }}>
                <div className="modal-content">
                  <span className="close" onClick={toggleModal}>
                    &times;
                  </span>
                  <h2>Detalhes do Usuário</h2>
                  {renderDataFields(data)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataList;
