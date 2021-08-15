import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.daycode * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="Weekday">{day()}</div>
    </div>
  );
}
