import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: '12 am',
        data: [321, 321, 321, 321, 321, 321, 321],
      },
      {
        name: '2 Am',
        data: [321, 321, 321, 321, 321, 321, 321],
      },
      {
        name: '3 Am',
        data: [321, 321, 321, 321, 321, 321, 321,],
      },
      {
        name: '4 Am',
        data: [321, 321, 321, 321, 321, 321, 321,],
      },
      {
        name: '10 Pm',
        data: [321, 321, 321, 321, 321, 321, 321,],
      },
      {
        name: '11 Pm',
        data: [321, 321, 321, 321, 321, 321, 321,],
      },
      {
        name: '12 Pm',
        data: [321, 321, 321, 321, 321, 321, 321,],
      },

      // Add the rest of your series data here
    ],
    options: {
      chart: {
        height: 50,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#0f6ca5", "#267aae", "#0f6ca5", "#3e89b7", "#0f6ca5", "#267aae", "#3e89b7"],
      xaxis: {
        categories: ['Sun', 'Mon',  'Thu', 'Wed', 'Thus', 'Fri', 'Sat'],
      },
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="heatmap" height={350} />
    </div>
  );
};
export default BarChart