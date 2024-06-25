export const validateBankForm = (values) => {
  let errors = {};

  if (!values.bankName) {
    errors.bankName = "O nome do banco é obrigatório.";
  }

  if (!values.accountNumber) {
    errors.accountNumber = "O número da conta é obrigatório.";
  } else if (!/^\d{4,}$/.test(values.accountNumber)) {
    errors.accountNumber = "O número da conta deve conter pelo menos 4 dígitos.";
  }

  if (!values.routingNumber) {
    errors.routingNumber = "O código de roteamento é obrigatório.";
  } else if (!/^\d{9}$/.test(values.routingNumber)) {
    errors.routingNumber = "O código de roteamento deve conter exatamente 9 dígitos.";
  }

  return errors;
};

export const bankFormInitialValues = {
  bankName: "",
  accountNumber: "",
  routingNumber: "",
};
