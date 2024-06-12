/** @format */

import "./form.css";
import Inputs from "../input/input";
import Button from "../button/button";
import { useState } from "react";

const Form = ({ loading, onSubmit, ...props }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Nome é obrigatório.";
    } else if (/\d/.test(name)) {
      newErrors.name = "Nome não pode conter numeros";
    }
    if (!status) newErrors.status = "Estado civil é obrigatório.";
    if (!age) newErrors.age = "Idade é obrigatória.";
    if (!gender) newErrors.gender = "Sexo é obrigatório.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let data = {
      id: Math.random(),
      name,
      status,
      age,
      gender,
    };

    if (onSubmit) {
      onSubmit(data);
    }

    setAge("");
    setGender("");
    setName("");
    setStatus("");
    setErrors({});
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} {...props}>
      <Inputs
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        errors={errors.name}
      />

      <Inputs
        type="text"
        value={status}
        placeholder="Estado civil"
        onChange={(e) => setStatus(e.target.value)}
        errors={errors.status}
      />

      <Inputs
        type="number"
        value={age}
        placeholder="Idade"
        onChange={(e) => setAge(e.target.value)}
        errors={errors.age}
      />

      <div className="flex-row form-control">
        <span>Sexo:</span>
        <label htmlFor="male">M</label>
        <Inputs
          type="radio"
          id="male"
          value="Masculino"
          name="gender"
          checked={gender === "Masculino"}
          onChange={(e) => setGender(e.target.value)}
          errors={errors.gender}
        />
        <label htmlFor="female">F</label>
        <Inputs
          type="radio"
          id="female"
          value="Feminino"
          name="gender"
          checked={gender === "Feminino"}
          onChange={(e) => setGender(e.target.value)}
          errors={errors.gender}
        />
      </div>
      <div className="form-control">
        <Button loading={loading}>Salvar</Button>
      </div>
    </form>
  );
};

export default Form;
