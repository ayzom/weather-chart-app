import React from "react";
import Chart from "react-apexcharts";

export default function ApexChart(props) {
  const series = [
    {
      name: "Temp",
      data: props.data
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true
      }
    },
    title: {
      text: 'Weather Temperature Forecast',
      align: 'left'
    },
    dataLabels: {
      enabled: false,
      textAnchor: 'middle',
      formatter: function(value, { seriesIndex, dataPointIndex, w }) {
        console.log(value);
        return w.config.series[seriesIndex].name + ":  " + value
      }
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    colors: ["#210124"],
    xaxis: {
      title: {
        text: 'Time'
      }
    },
    yaxis: {
      title: {
        text: 'Fahrenheit Temparature'
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ["#DB162F"],
        opacityFrom: 1,
        opacityTo: 1,
        type: "vertical",
        stops: [0, 30]
      }
    }
  };
  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" width={1000} height={400} />
    </div>
  );
}
