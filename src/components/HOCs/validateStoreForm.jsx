export const validateStoreForm = (values) => {
    let errors = {};
    if (!values.storeName) {
      errors.storeName = 'Nome da loja é obrigatório';
    }
    if (!values.email) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email inválido';
    }
    if (!values.password) {
      errors.password = 'Senha é obrigatória';
    } else if (values.password.length < 6) {
      errors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    return errors;
  };
  
  export const storeFormInitialValues = {
    storeName: '',
    email: '',
    password: '',
  };
  