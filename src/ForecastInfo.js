import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Weekday">Thu</div>
          <div className="forecastIcon">
            <WeatherIcon code={props.data[0].weather[0].icon} size={40} />
          </div>
          <div className="forecastTemp">
            <span className="maxTemp">
              {Math.round(props.data[0].temp.max)}°
            </span>{" "}
            |{" "}
            <span className="minTemp">
              {Math.round(props.data[0].temp.min)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
