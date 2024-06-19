/** @format */

import React from "react";

const SelectBrands = ({ className, onChange, brands }) => {
  return (
    <select
      name="brands"
      className={className}
      onChange={(e) => onChange(e.target.value)}>
      <option value="">Selecione a marca</option>
      {brands &&
        brands.map((brand) => (
          <option key={brand.codigo} value={brand.codigo}>
            {brand.codigo} {brand.nome}
          </option>
        ))}
    </select>
  );
};

export default SelectBrands;
