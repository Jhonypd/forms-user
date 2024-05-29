/** @format */

import "./data-list.css";

const DataList = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="data-display">
      <h2>Usuário cadastrado</h2>
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
  );
};

export default DataList;
