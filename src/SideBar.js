import React, { useState } from "react";

export default function SideBar(props) {
  return (
    <div className="SideBar">
      <ul>
        <li>Feels Like: {props.data.feels}°C</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
