import React from "react";

const CardDay = ({ forecast }) => {
  console.log(forecast)
  const { dia, tempo, maxima, minima, iuv } = forecast;
  console.log(forecast)
  return (
    <div className="weather-card">
      <h2>{dia}</h2>
      <p>Condição: {tempo}</p>
      <p>Temperatura Máxima: {maxima}°C</p>
      <p>Temperatura Mínima: {minima}°C</p>
      <p>Índice Ultravioleta: {iuv}</p>
    </div>
  );
};

export default CardDay;
