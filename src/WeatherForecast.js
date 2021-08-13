import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function forecastData() {}

  let latitude = props.coord.lat;
  let longitude = props.coord.lon;

  let apiKey = "5c1e7eee50bb2935f340cf0e657b8b02";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(forecastData);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weekday">Thu</div>
          <div className="forecastIcon">
            <WeatherIcon code="09d" size={40} />
          </div>
          <div className="forecastTemp">
            <span className="maxTemp">20°</span> |{" "}
            <span className="minTemp">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
