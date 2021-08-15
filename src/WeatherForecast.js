import axios from "axios";
import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";

import ForecastInfo from "./ForecastInfo";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setforecastData] = useState(null);

  function pullForecast(response) {
    setforecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastInfo data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;

    let apiKey = "5c1e7eee50bb2935f340cf0e657b8b02";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(pullForecast);
    return null;
  }
}
