/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import BoxContainer from "./components/container/box";
import Form from "./components/forms/form";
import DataList from "./components/data/data-list";
import { backList } from "./utils/back-lst";

function App() {
  const [formData, setFormData] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setFormData(data);
      setDataList((prevList) => backList(prevList, data));
      setLoading(false);
    }, 3000);
  };

  const handleDelete = (id) => {
    const updatedList = dataList.filter((item) => item.id !== id);
    setDataList(updatedList);
  };

  useEffect(() => {
    const fetch = async () => {
      if (!formData) return;

      const isDuplicate = dataList.some((item) => item.id === formData.id);

      if (isDuplicate) {
        return;
      }

      const updatedList = [...dataList, formData];

      setDataList(updatedList);
    };

    fetch();
  }, [formData]);

  return (
    <div className="App">
      <BoxContainer>
        <h2>Cadastro</h2>
        <Form onSubmit={handleFormSubmit} loading={loading} />

        {dataList.map((data) => (
          <DataList key={data.id} data={data} onDelete={handleDelete} />
        ))}
      </BoxContainer>
    </div>
  );
}

export default App;
