import React, {useState, useEffect, useRef} from "react";
import axios from 'axios';
import WeatherCard from "./WeatherCard/WeatherCard";
const apiKey = import.meta.env.VITE_API_KEY;

const WeatherList = () => {

  const [city, setCity] = useState("Madrid");
  const [weatherListItem, setWeatherListItem] = useState([]);
  
  const inputRef = useRef(""); // esta referencia será un string vacío al principio
 
  useEffect(() => {
      async function fetchData() {
         try{
       // Petición HTTP
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
          const json = await res.data.list;
        
          // Guarda en el array de posts el resultado. Procesa los datos
          setWeatherListItem(json);
            }catch(e){
          setWeatherListItem([]) // No pintes nada 
          }
        } fetchData(); 
      }, [city]);
  
  const paintData = () =>
    weatherListItem.map((item, index) => (
      <WeatherCard key={index} data={item} remove={() => removeItem(index)} />
    ));


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.city.value)
    setCity(e.target.city.value) 
  };

  return <section className="city-section">
  
    <h1>Weather list</h1>
    <form onSubmit={handleSubmit}>
      <input name="city"/>
      <button>Buscar</button>
    </form>

    {paintData()}

</section>
};

export default WeatherList;