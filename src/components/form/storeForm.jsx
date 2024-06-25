/** @format */

import React from "react";
import useFormHandling from "../HOCs/useFormHandling";
import { storeFormInitialValues, validateStoreForm } from "../HOCs/validateStoreForm";

const StoreForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    toastMessage,
    toastType,
  } = useFormHandling(validateStoreForm, storeFormInitialValues);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome da Loja</label>
        <input
          className={errors.storeName ? "error" : ""}
          type="text"
          name="storeName"
          value={values.storeName || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className={errors.email ? "error" : ""}
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          className={errors.password ? "error" : ""}
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        />
      </div>

      {toastMessage && <div className={`toast ${toastType}`}>{toastMessage}</div>}
    </form>
  );
};

export default StoreForm;
