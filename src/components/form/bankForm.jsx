/** @format */

import React from "react";
import useFormHandling from "../HOCs/useFormHandling";
import { bankFormInitialValues, validateBankForm } from "../HOCs/validateBankingForm";

const BankForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    toastMessage,
    toastType,
  } = useFormHandling(validateBankForm, bankFormInitialValues);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Banco</label>
        <input
          className={errors.bankName ? "error" : ""}
          type="text"
          name="bankName"
          value={values.bankName || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Número da Conta</label>
        <input
          className={errors.accountNumber ? "error" : ""}
          type="text"
          name="accountNumber"
          value={values.accountNumber || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Código de Roteamento</label>
        <input
          type="text"
          name="routingNumber"
          value={values.routingNumber || ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {toastMessage && <div className={`toast ${toastType}`}>{toastMessage}</div>}
    </form>
  );
};

export default BankForm;
