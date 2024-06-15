/** @format */

import React, { useState } from "react";
import "./App.css";
import BoxContainer from "./components/container/box";
import DataList from "./components/data/data-list";
import Form from "./components/forms/form";
import { fetchCurrentConditions, fetchPrevisao } from "./api/api";
import CardDay from "./components/data/card-day";

function App() {
  const [dataList, setDataList] = useState([]);
  const [previsao, setPrevisao] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    const conditions = await fetchCurrentConditions(formData.airportCode);
    const previsao = await fetchPrevisao(formData.airportCode);
    setPrevisao(previsao);

    setLoading(false);
    setDataList(conditions);
  };

  return (
    <div className="App">
      <BoxContainer>
        <h2>Cadastro</h2>

        <Form loading={loading} onSubmit={handleSubmit} />

        <DataList data={dataList} />
        {previsao.map((day) => (
          <CardDay key={day.dia} forecast={day} />
        ))}
      </BoxContainer>
    </div>
  );
}

export default App;
