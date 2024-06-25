/** @format */

import { useState } from "react";
import StoreForm from "../form/storeForm";
import BankForm from "../form/bankForm";

const Register = () => {
  const [step, setStep] = useState(1);
  const [storeData, setStoreData] = useState({});
  const [bankData, setBankData] = useState({});
  const [storeFormData, setStoreFormData] = useState({});
  const [bankFormData, setBankFormData] = useState({});

  const handleStoreSubmit = (data) => {
    setStoreData(data);
    setStoreFormData(data);
    setStep(2);
  };

  const handleBankSubmit = (data) => {
    setBankData(data);
    setBankFormData(data);
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
    if (step === 2) {
      setStoreFormData(storeData);
    }
  };

  const goToNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);

    if (step === 2) {
      setBankFormData(bankData);
    }
  };

  return (
    <div className="flex-forms">
      <div className="step-indicator">
        <span className={step === 1 ? "active" : ""}>1</span>
        <span className={step === 2 ? "active" : ""}>2</span>
      </div>
      {step === 1 && (
        <StoreForm initialValues={storeFormData} onSubmit={handleStoreSubmit} />
      )}
      {step === 2 && (
        <BankForm initialValues={bankFormData} onSubmit={handleBankSubmit} />
      )}

      {step > 1 && (
        <button onClick={goToPreviousStep} className="navigation">
          Voltar
        </button>
      )}
      {step < 2 && (
        <button onClick={goToNextStep} className="navigation">
          Próximo
        </button>
      )}
    </div>
  );
};

export default Register;
