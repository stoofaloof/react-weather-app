import React from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";

export default function ForecastInfo(props) {
  return (
    <div className="ForecastInfo">
      <ForecastDay daycode={props.data.dt} />
      <div className="forecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="forecastTemp">
        <span className="maxTemp">{Math.round(props.data.temp.max)}°</span> |{" "}
        <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
