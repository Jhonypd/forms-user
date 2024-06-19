/** @format */

import "./data-list.css";

const DataList = ({ data }) => {
  if (!data) return null;

  const renderDataFields = (data) => {
    return (
      <>
        <tr>
          <th>Marca</th>
          <td>{data.Marca}</td>
        </tr>
        <tr>
          <th>Código Fipe</th>
          <td>{data.CodigoFipe}</td>
        </tr>
        <tr>
          <th>Combustível</th>
          <td>{data.Combustivel}</td>
        </tr>
        <tr>
          <th>Sigla do Combustível</th>
          <td>{data.SiglaCombustivel}</td>
        </tr>
        <tr>
          <th>Modelo</th>
          <td>{data.Modelo}</td>
        </tr>
        <tr>
          <th>Ano do Modelo</th>
          <td>{data.AnoModelo}</td>
        </tr>
        <tr>
          <th>Preço</th>
          <td>{data.Valor}</td>
        </tr>
        <tr>
          <th>Mês de Referência</th>
          <td>{data.MesReferencia}</td>
        </tr>
        <tr>
          <th>Tipo de Veículo</th>
          <td>{data.TipoVeiculo}</td>
        </tr>
      </>
    );
  };

  const renderPriceHistory = (priceHistory) => {
    return priceHistory.map((entry, index) => (
      <tr key={index}>
        <th>{entry.month}</th>
        <td>{entry.price}</td>
      </tr>
    ));
  };

  return (
    <div className="data-display">
      <table className="data-table">
        <tbody>
          {renderDataFields(data)}
          {data.priceHistory && data.priceHistory.length > 0 && (
            <>
              <tr>
                <th colSpan="2">Histórico de Preços</th>
              </tr>
              {renderPriceHistory(data.priceHistory)}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
