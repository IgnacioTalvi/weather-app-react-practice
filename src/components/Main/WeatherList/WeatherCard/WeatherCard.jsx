import React from "react";

const WeatherCard = ({data}) => {
  const {dt_txt, main} = data;
  console.log(data);
  
  return <article >
    <p>Temperatura: {main.temp}°</p>
    <p>Fecha: {dt_txt}</p>
  </article>;
};

export default WeatherCard;
