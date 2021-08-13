import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import SideBar from "./SideBar";

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
          <div className="currentIcon">
            <WeatherIcon code={props.data.icon} size={70} />
          </div>
          <WeatherTemperature temp={props.data.temperature} />
        </div>
        <div className="col-6 SideBar">
          <SideBar data={props.data} />
        </div>
      </div>
    </div>
  );
}
