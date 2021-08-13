import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function apiResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      coord: response.data.coord,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      city: response.data.name,
      country: response.data.sys.country,
      feels: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  function submitCity(event) {
    event.preventDefault();
    search();
  }

  function cityName(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5c1e7eee50bb2935f340cf0e657b8b02";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(apiResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={submitCity}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={cityName}
              />
            </div>
            <div className="col-3 d-grid gap-2 d-md-flex justify-content-md-end ">
              <button type="submit" className="btn btn-primary me-md-1">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
