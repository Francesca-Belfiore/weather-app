import { useState, useEffect } from 'react';
import { api } from "../../utils.js";
import "./Weather.css";

export default function Weather() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});


    useEffect(() => {
        if (city === "") {
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + (localStorage.getItem("memoCity") || "Rome") + "')";
            fetch(`${api.base}weather?q=${localStorage.getItem("memoCity") || "Rome"},it&units=metric&APPID=${api.key}&lang=it`)
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
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";
            city && fetch(`${api.base}weather?q=${city},it&units=metric&APPID=${api.key}&lang=it`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    localStorage.setItem("memoCity", city)
                    setCity('');
                }
                )
        }
    }

    return (
        <>
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Cerca città..."
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    onKeyPress={search}
                />
            </div>

            {weather.id && (
                <div className="weather-box">
                    <h1 className="location">Il meteo a {weather.name}</h1>

                    <div>
                        <p className="temp">Temperatura: {Math.round(weather.main.temp)}°C, Percepita: {Math.round(weather.main.feels_like)}°C</p>
                        <div className="weather">
                            <img src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} alt="weather icon" width="32px" />
                            <p>{weather.weather[0].description}</p>
                        </div>
                        <p>Max: {Math.round(weather.main.temp_max)}°C - Min: {Math.round(weather.main.temp_min)}°C</p>
                        <p>Velocità del vento: {weather.wind.speed} km/h</p>
                        <p>Umidità: {weather.main.humidity}%</p>
                    </div>
                </div>
            )}
        </>
    )
};