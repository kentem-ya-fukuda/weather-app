import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';


interface WeatherDisplayProps {
  city: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(city);
      setWeather(data);
    };
    getWeather();
  }, [city]);

  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp} °C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
