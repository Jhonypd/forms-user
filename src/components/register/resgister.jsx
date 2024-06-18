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
    console.log("Store data submitted:", data);
    setStoreData(data);
    setStoreFormData(data);
    setStep(2);
  };

  const handleBankSubmit = (data) => {
    console.log("Bank data submitted:", data);
    setBankData(data);
    setBankFormData(data);
    const comboData = { ...storeData, ...data };
    console.log("Combined data:", comboData);
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    console.log("Going to previous step");
    setStep(step - 1);
    if (step === 2) {
      console.log("Restoring store data:", storeData);
      setStoreFormData(storeData);
    }
  };

  const goToNextStep = (e) => {
    e.preventDefault();
    console.log("Going to next step");
    setStep(step + 1);

    if (step === 2) {
      console.log("Restoring bank data:", bankData);
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
