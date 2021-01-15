import React, { useState, useEffect } from "react";
import ChartViewer from "./ChartViewer";

function getWeatherData() {
  return fetch("https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1")
  .then(res => res.json())
  .then(result => {
    const { current: { temp_f }, forecast: { forecastday: [{ hour }] } } = result;
    const response = {
      temp_f,
      forecast: hour.map(item => {
        return { x: item.time.slice(10), y: item.temp_f + " ºFahrenheit" }
      })
    }
    return response;
  });
}


export default function Clock() {

    const [data, updateData] = useState([]);

    useEffect(() => {
      setInterval(() => {
        getWeatherData().then(response => {
          updateData(response.forecast);
        })
      }, 5000);
    }, []);

      return (
        <div className="App">
          <ChartViewer data={data} title="Product Trends by Month" />
        </div>
      );
}