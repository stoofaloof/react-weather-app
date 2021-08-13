import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
