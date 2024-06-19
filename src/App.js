/** @format */

import React, { useState } from "react";
import "./App.css";
import BoxContainer from "./components/container/box";
import Form from "./components/forms/form";
import DataList from "./components/data/data-list";



function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleFormSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <BoxContainer>
        <h2>Cadastro</h2>

        <Form loading={loading} onSubmit={handleFormSubmit} />
      </BoxContainer>
      <div>{data && <DataList data={data} />}</div>
    </div>
  );
}

export default App;
