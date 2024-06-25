import { useState, useEffect } from "react";

const useFormHandling = (validate, initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setIsSuccess(true);
      setToastMessage("Formulário enviado com sucesso!");
      setToastType("success");
    } else {
      const errorMessage = Object.values(errors).join(", ");
      setIsSuccess(false);
      setToastMessage(`Erro no envio do formulário: ${errorMessage}`);
      setToastType("error");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSuccess,
    toastMessage,
    toastType,
  };
};

export default useFormHandling;
