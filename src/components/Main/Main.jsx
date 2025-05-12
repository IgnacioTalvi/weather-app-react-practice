import React, {useState} from "react";
import weatherData from "./weatherData.js"
import axios from 'axios';


const WeatherList = () => {

  const [weatherListItem, setWeatherListItem] = useState(weatherData);
  
  return <div>Main</div>;
};

export default WeatherList;
