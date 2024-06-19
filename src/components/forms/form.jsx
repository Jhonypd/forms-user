/** @format */

import React, { useEffect, useState } from "react";
import "./form.css";
import Button from "../button/button";
import { getMarcas } from "../../utils/getMarcas";
import { getModelos } from "../../utils/getModelos";
import { getAno } from "../../utils/getAno";
import { getInfos } from "../../utils/getInfos";
import SelectBrands from "../input/selectBrands";
import SelectModels from "../input/selectModels";
import SelectYears from "../input/selectYears";

// const vehicleTypes = [{ type: "cars" }, { type: "motorcycles" }, { type: "trucks" }];
const vehicleTypes = [{ type: "carros" }, { type: "motos" }, { type: "caminhoes" }];

const Form = ({ loading, onSubmit, ...props }) => {
  const [vehicleType, setVehicleType] = useState(null);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getInfos(vehicleType, brand, model, year);
      onSubmit(data);
    } catch (error) {
      setVehicleType(null);
      setModel([]);
      setYear(null);
      setBrand(null);
      setErrors("Erro ao buscar informações");
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        if (vehicleType) {
          const data = await getMarcas(vehicleType);
          setBrands(data);
        }
      } catch (error) {
        setVehicleType(null);
        setModel([]);
        setYear(null);
        setBrand(null);
        console.error("Erro ao buscar dados do tipo de veículo selecionado", error);
      }
    };
    if (vehicleType) {
      fetchBrands();
    }
  }, [vehicleType]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        if (vehicleType && brand) {
          const data = await getModelos(vehicleType, brand);
          setModels(data);
        }
      } catch (error) {
        setVehicleType(null);
        setModel([]);
        setYear(null);
        setBrand(null);
        console.error("Erro ao buscar modelos", error);
      }
    };
    if (brand && vehicleType) {
      fetchModels();
    }
  }, [brand]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        if (vehicleType !== null && brand !== null && model !== null) {
          const data = await getAno(vehicleType, brand, model);
          setYears(data);
        }
      } catch (error) {
        setVehicleType(null);
        setModel([]);
        setYear(null);
        setBrand(null);
        console.error("Erro ao buscar anos", error);
      }
    };
    if (vehicleType && brand && model) {
      fetchYears();
    }
  }, [model]);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="grid">
        <select
          name="vehicleTypes"
          className="form-control"
          onChange={(e) => setVehicleType(e.target.value)}>
          <option value="">Tipo de veículo</option>
          {vehicleTypes.map((vehicle) => (
            <option key={vehicle.type} value={vehicle.type}>
              {vehicle.type.toUpperCase()}
            </option>
          ))}
        </select>
        <SelectBrands
          className="form-control"
          onChange={(brand) => setBrand(brand)}
          brands={brands}
        />
        <SelectModels
          className="form-control"
          onChange={(model) => setModel(model)}
          models={models.modelos}
        />
        <SelectYears
          className="form-control"
          onChange={(year) => setYear(year)}
          years={years}
        />
      </div>
      <Button text="Buscando" loading={loading}>
        Buscar
      </Button>
      {errors && <div className="error">{errors}</div>}
    </form>
  );
};

export default Form;
