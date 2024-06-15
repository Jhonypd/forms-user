/** @format */

import React from "react";
import { orderByName } from "../../utils/station-code";

const Select = ({ className, onChange }) => {
  return (
    <div>
      <select
        name="aeroportos"
        className={className}
        onChange={(e) => onChange(e.target.value)}>
        {orderByName.map((code) => (
          <option  key={code.Sigla} value={code.Sigla}>
            {code.Sigla} - {code.Aeroporto} / {code.Estado}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
