/** @format */

import React from "react";

const SelectYears = ({ className, onChange, years }) => {
  // console.log(years)
  return (
    <select name="model" className={className} onChange={(e) => onChange(e.target.value)}>
      <option value="">Selecione o ano</option>
      {years &&
        years.map((year) => (
          <option key={year.codigo} value={year.codigo}>
            {year.codigo} {year.nome}
          </option>
        ))}
    </select>
  );
};

export default SelectYears;
