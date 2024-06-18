/** @format */
export const validateBankForm = (values) => {
  let errors = {};
  if (!values.bankName) {
    errors.bankName = "Nome do banco é obrigatório";
  }
  if (!values.accountNumber) {
    errors.accountNumber = "Número da conta é obrigatório";
  } else if (!/^\d{4,}$/.test(values.accountNumber)) {
    errors.accountNumber = "Número da conta inválido";
  }
  if (!values.routingNumber) {
    errors.routingNumber = "Código de roteamento é obrigatório";
  } else if (!/^\d{9}$/.test(values.routingNumber)) {
    errors.routingNumber = "Código de roteamento inválido";
  }
  return errors;
};

export const bankFormInitialValues = {
  bankName: "",
  accountNumber: "",
  routingNumber: "",
};
