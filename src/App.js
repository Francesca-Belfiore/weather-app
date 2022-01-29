import { useState, useEffect } from 'react';
import { api } from "./utils.js";
import Clock from './components/Clock';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (city === "") {
      fetch(`${api.base}weather?q=Rome,it&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
        }
      )
    }
  }, []); // eslint-disable-line

  const search = evt => {
    if (evt.key === "Enter") {
      city && fetch(`${api.base}weather?q=${city},it&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCity('');
        }
      )
    }
  }

  return (
    <div className="App">

      <Clock />

      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search city..."
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </div>

      {weather.id && (
        <div>
          <h1 className="location">{weather.name}, {weather.sys.country}</h1>

          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
