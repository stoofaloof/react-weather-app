import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, <small>{props.data.country}</small>
      </h1>
      <ul className="TopHeader">
        <li>Sunday, August 8, 2021 10:27 PM</li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
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
