import React, { useState } from 'react';
import axios from 'axios';
import './App.css';



const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa3b70851ff3cfaab595923162142fe3&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Weather App</h2>
      <input
        type="text"
        className="input"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={fetchWeather}>
        Get Weather
      </button>
      {weatherData && (
        <div className="weather-info">
          <h3 className="city">{weatherData.name}</h3>
          <p className="temperature">
            Temperature: {weatherData.main.temp}°C
          </p>
          <p className="feels-like">
            Feels Like: {weatherData.main.feels_like}°C
          </p>
          <p className="description">
            Weather: {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
