/** @format */

import "./form.css";
import Button from "../button/button";
import { useState } from "react";
import Select from "../input/select";

const Form = ({ loading, onSubmit, ...props }) => {
  const [airportCode, setAirportCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random(),
      airportCode,
    };

    if (onSubmit) onSubmit(data);

    setAirportCode("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="flex-row form-control">
        <Select className={"form-control"} onChange={setAirportCode} />
      </div>
      <div className="form-control">
        <Button text={"Buscando"} loading={loading}>
          Buscar
        </Button>
      </div>
    </form>
  );
};

export default Form;
