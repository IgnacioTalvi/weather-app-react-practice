import React from "react";

const WeatherCard = ({data}) => {
  const {date, time, degrees} = data;
  return <article >
    <p>Temperatura: {degrees}</p>
    <p>Fecha: {date}</p>
    <p>Hora: {time}</p>
  </article>;
};

export default WeatherCard;
