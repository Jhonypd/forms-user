/** @format */

import React from "react";
import formHandling from "../HOCs/formHandling";
import { storeFormInitialValues, validateStoreForm } from "../HOCs/validateStoreForm";

const StoreForm = React.forwardRef(
  ({ values, errors, handleChange, handleSubmit }, ref) => (
    <form onSubmit={handleSubmit} ref={ref}>
      <div>
        <label>Nome da Loja</label>
        <input
          className={errors.storeName ? "error" : ""}
          type="text"
          name="storeName"
          value={values.storeName || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className={errors.email ? "error" : ""}
          type="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          className={errors.password ? "error" : ""}
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
        />
      </div>
    </form>
  )
);

export default formHandling(StoreForm, validateStoreForm, storeFormInitialValues);
