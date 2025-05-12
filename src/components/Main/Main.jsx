import React, {useState, useEffect} from "react";
import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;


const WeatherList = () => {

  const [city, setCity] = useState("Madrid");
  const [weatherListItem, setWeatherListItem] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
        const json = res.data;

        // Guarda en el array de datos el resultado. Procesa los datos
        setWeatherListItem(res.data.list.map(c => c.main.temp));
      }catch(e){
        setWeatherListItem([]) // No pintes nada 
      }
    }

    fetchData();
  }, [city]); 


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

  {weatherListItem.length!==0?
                    <ul className='topics'>
                      {weatherListItem.map(city => (
                        <li key={city.temp}></li>
                      ))}
                    </ul>
                    :""
  }
</section>
};

export default WeatherList;

