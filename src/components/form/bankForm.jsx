/** @format */
import React from "react";
import formHandling from "../HOCs/formHandling";
import { bankFormInitialValues, validateBankForm } from "../HOCs/validateBankingForm";

const BankForm = React.forwardRef(
  ({ values, errors, handleChange, handleSubmit }, ref) => (
    <form onSubmit={handleSubmit} ref={ref}>
      <div>
        <label>Nome do Banco</label>
        <input
          className={errors.bankName ? "error" : ""}
          type="text"
          name="bankName"
          value={values.bankName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Número da Conta</label>
        <input
          className={errors.accountNumber ? "error" : ""}
          type="text"
          name="accountNumber"
          value={values.accountNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Código de Roteamento</label>
        <input
          type="text"
          name="routingNumber"
          value={values.routingNumber}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
);

export default formHandling(BankForm, validateBankForm, bankFormInitialValues);
