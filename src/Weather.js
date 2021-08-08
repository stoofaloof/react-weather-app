import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3 d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary me-md-1"
            />
          </div>
        </div>
      </form>
      <h1>Toronto</h1>
      <ul className="TopHeader">
        <li>Sunday, August 8, 2021 10:27 PM</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          <div className="temperature">22°C</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 88%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
