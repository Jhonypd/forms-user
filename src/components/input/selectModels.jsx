/** @format */

import React from "react";

const SelectModels = ({ className, onChange, models }) => {
  // console.log(models)
  return (
    
      <select
        name="model"
        className={className}
        onChange={(e) => onChange(e.target.value)}>
        <option value="">Selecione o modelo</option>
        {models &&
          models.map((model) => (
            <option key={model.codigo} value={model.codigo}>
              {model.codigo} {model.nome}
            </option>
          ))}
      </select>
    
  );
};

export default SelectModels;
