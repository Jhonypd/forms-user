/** @format */

import { useState } from "react";
import "./App.css";
import BoxContainer from "./components/container/box";
import Form from "./components/forms/form";
import DataList from "./components/data/data-list";

function App() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setFormData(data);
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="App">
      <BoxContainer>
        <h2>Cadastro</h2>
        <Form onSubmit={handleFormSubmit} loading={loading} />
        <DataList data={formData} />
      </BoxContainer>
    </div>
  );
}

export default App;
