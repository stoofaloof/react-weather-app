import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("Celcius");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("Celcius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  if (unit === "Celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.temp)} </span>
        <span className="celcius">
          <button onClick={showCelcius}>°C</button> |{" "}
          <button onClick={showFahrenheit}>°F</button>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round((props.temp * 9) / 5 + 32)}{" "}
        </span>
        <span className="fahrenheit">
          <button onClick={showCelcius}>°C</button> |{" "}
          <button onClick={showFahrenheit}>°F</button>
        </span>
      </div>
    );
  }
}
