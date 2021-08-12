import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, <small>{props.data.country}</small>
      </h1>
      <ul className="TopHeader">
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">{props.data.temperature}</span>

          <span className="unit"> °C</span>
        </div>
        <div className="col-6 sideList">
          <ul>
            <li>Feels Like: {props.data.feels}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
